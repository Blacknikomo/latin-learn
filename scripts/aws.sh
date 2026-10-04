#!/usr/bin/env bash
# Hosting for latin.lesnik.me: private S3 bucket + CloudFront (OAC) + ACM cert.
# DNS lives at Squarespace, so DNS records are added there by hand.
#
#   scripts/aws.sh cert     # 1. request ACM cert (us-east-1), print validation CNAME
#   scripts/aws.sh infra    # 2. after cert is ISSUED: bucket, OAC, distribution, bucket policy
#   scripts/aws.sh deploy   # 3. check + build + upload + invalidate   (npm run deploy)
#   scripts/aws.sh status   # cert / distribution state
#   scripts/aws.sh api      # progress-sync backend: stack backend/template.yaml + Lambda code
#
# Every step is idempotent. Resource IDs are cached in deploy.env.local (gitignored).
# Requires AWS CLI v2 with credentials (AWS_PROFILE is respected).
set -euo pipefail
cd "$(dirname "$0")/.."

DOMAIN="${DOMAIN:-latin.lesnik.me}"
BUCKET="${BUCKET:-latin-lesnik-me-site}"
REGION="${REGION:-eu-west-1}"
OAC_NAME="${BUCKET}-oac"
STATE=deploy.env.local
CACHING_OPTIMIZED=658327ea-f89d-4fab-a63d-7e88639e58f6   # AWS managed cache policy

export AWS_PAGER=""
[ -f "$STATE" ] && source "$STATE"
save() { grep -v "^$1=" "$STATE" 2>/dev/null > "$STATE.tmp" || true; echo "$1=$2" >> "$STATE.tmp"; mv "$STATE.tmp" "$STATE"; }
log()  { printf '\n\033[1m%s\033[0m\n' "$*"; }

find_cert() {
  aws acm list-certificates --region us-east-1 \
    --certificate-statuses PENDING_VALIDATION ISSUED \
    --query "CertificateSummaryList[?DomainName=='$DOMAIN'].CertificateArn | [0]" --output text
}

cmd_cert() {
  local arn; arn="$(find_cert)"
  if [ "$arn" = "None" ] || [ -z "$arn" ]; then
    log "Requesting ACM certificate for $DOMAIN (us-east-1)"
    arn="$(aws acm request-certificate --region us-east-1 --domain-name "$DOMAIN" \
      --validation-method DNS --query CertificateArn --output text)"
    sleep 5
  fi
  save CERT_ARN "$arn"
  log "Certificate: $arn"
  aws acm describe-certificate --region us-east-1 --certificate-arn "$arn" \
    --query 'Certificate.{Status:Status,Name:DomainValidationOptions[0].ResourceRecord.Name,Value:DomainValidationOptions[0].ResourceRecord.Value}' \
    --output table
  echo "Add the Name/Value above as a CNAME in Squarespace (Host = Name without '.lesnik.me.')."
}

cmd_infra() {
  : "${CERT_ARN:?run 'scripts/aws.sh cert' first}"
  local st; st="$(aws acm describe-certificate --region us-east-1 --certificate-arn "$CERT_ARN" --query Certificate.Status --output text)"
  [ "$st" = "ISSUED" ] || { echo "Certificate is $st — add the validation CNAME and wait."; exit 1; }
  ACCOUNT="$(aws sts get-caller-identity --query Account --output text)"

  log "S3 bucket s3://$BUCKET ($REGION)"
  if ! aws s3api head-bucket --bucket "$BUCKET" 2>/dev/null; then
    aws s3api create-bucket --bucket "$BUCKET" --region "$REGION" \
      --create-bucket-configuration LocationConstraint="$REGION" >/dev/null
  fi
  aws s3api put-public-access-block --bucket "$BUCKET" --public-access-block-configuration \
    BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true

  log "Origin Access Control"
  OAC_ID="$(aws cloudfront list-origin-access-controls \
    --query "OriginAccessControlList.Items[?Name=='$OAC_NAME'].Id | [0]" --output text)"
  if [ "$OAC_ID" = "None" ] || [ -z "$OAC_ID" ]; then
    OAC_ID="$(aws cloudfront create-origin-access-control --origin-access-control-config \
      "Name=$OAC_NAME,SigningProtocol=sigv4,SigningBehavior=always,OriginAccessControlOriginType=s3" \
      --query OriginAccessControl.Id --output text)"
  fi
  save OAC_ID "$OAC_ID"

  log "CloudFront distribution"
  DIST_ID="$(aws cloudfront list-distributions \
    --query "DistributionList.Items[?Aliases.Items && contains(Aliases.Items, '$DOMAIN')].Id | [0]" --output text)"
  if [ "$DIST_ID" = "None" ] || [ -z "$DIST_ID" ]; then
    local origin="$BUCKET.s3.$REGION.amazonaws.com" cfg; cfg="$(mktemp)"
    cat > "$cfg" <<JSON
{
  "CallerReference": "$DOMAIN-$(date +%s)",
  "Comment": "$DOMAIN",
  "Enabled": true,
  "Aliases": { "Quantity": 1, "Items": ["$DOMAIN"] },
  "DefaultRootObject": "index.html",
  "HttpVersion": "http2and3",
  "IsIPV6Enabled": true,
  "PriceClass": "PriceClass_100",
  "Origins": { "Quantity": 1, "Items": [{
    "Id": "s3", "DomainName": "$origin", "OriginAccessControlId": "$OAC_ID",
    "S3OriginConfig": { "OriginAccessIdentity": "" } }] },
  "DefaultCacheBehavior": {
    "TargetOriginId": "s3",
    "ViewerProtocolPolicy": "redirect-to-https",
    "CachePolicyId": "$CACHING_OPTIMIZED",
    "Compress": true,
    "AllowedMethods": { "Quantity": 2, "Items": ["GET","HEAD"],
      "CachedMethods": { "Quantity": 2, "Items": ["GET","HEAD"] } }
  },
  "ViewerCertificate": {
    "ACMCertificateArn": "$CERT_ARN",
    "SSLSupportMethod": "sni-only",
    "MinimumProtocolVersion": "TLSv1.2_2021"
  }
}
JSON
    DIST_ID="$(aws cloudfront create-distribution --distribution-config "file://$cfg" --query Distribution.Id --output text)"
    rm -f "$cfg"
  fi
  save DIST_ID "$DIST_ID"

  log "Bucket policy (CloudFront-only read)"
  aws s3api put-bucket-policy --bucket "$BUCKET" --policy "{
    \"Version\": \"2012-10-17\",
    \"Statement\": [{
      \"Sid\": \"AllowCloudFrontOAC\", \"Effect\": \"Allow\",
      \"Principal\": { \"Service\": \"cloudfront.amazonaws.com\" },
      \"Action\": \"s3:GetObject\", \"Resource\": \"arn:aws:s3:::$BUCKET/*\",
      \"Condition\": { \"StringEquals\": { \"AWS:SourceArn\": \"arn:aws:cloudfront::$ACCOUNT:distribution/$DIST_ID\" } }
    }]}"

  local cf; cf="$(aws cloudfront get-distribution --id "$DIST_ID" --query Distribution.DomainName --output text)"
  save CF_DOMAIN "$cf"
  log "Done. In Squarespace add:  CNAME  latin  ->  $cf"
}

cmd_deploy() {
  : "${DIST_ID:?run 'scripts/aws.sh infra' first}"
  log "Check + build"
  npm run check
  npm run build
  log "Upload to s3://$BUCKET"
  aws s3 sync dist/ "s3://$BUCKET/" --delete --exclude index.html \
    --cache-control "public,max-age=31536000,immutable"
  aws s3 cp dist/index.html "s3://$BUCKET/index.html" \
    --cache-control "no-cache" --content-type "text/html; charset=utf-8"
  log "Invalidate /index.html"
  aws cloudfront create-invalidation --distribution-id "$DIST_ID" --paths /index.html /favicon.svg \
    --query Invalidation.Id --output text
  echo "https://$DOMAIN"
}

# Progress-sync backend (table + Lambda + HTTP API). Cognito pool/client ids are read from
# .env.local (VITE_AUTH_AUTHORITY / VITE_AUTH_CLIENT_ID) so they never land in the repo.
cmd_api() {
  local envf=.env.local stack="${API_STACK:-latin-progress-api}" authority client pool fn zip
  authority="$(sed -n 's/^VITE_AUTH_AUTHORITY=//p' "$envf" 2>/dev/null)"
  client="$(sed -n 's/^VITE_AUTH_CLIENT_ID=//p' "$envf" 2>/dev/null)"
  pool="${authority##*/}"
  [ -n "$pool" ] && [ -n "$client" ] || { echo "Set VITE_AUTH_AUTHORITY and VITE_AUTH_CLIENT_ID in $envf first."; exit 1; }
  log "Backend tests"
  node backend/test.mjs >/dev/null
  log "Stack $stack ($REGION)"
  aws cloudformation deploy --region "$REGION" --stack-name "$stack" \
    --template-file backend/template.yaml --capabilities CAPABILITY_IAM --no-fail-on-empty-changeset \
    --parameter-overrides "UserPoolId=$pool" "UserPoolClientId=$client"
  fn="$(aws cloudformation describe-stacks --region "$REGION" --stack-name "$stack" \
    --query "Stacks[0].Outputs[?OutputKey=='FunctionName'].OutputValue" --output text)"
  log "Lambda code -> $fn"
  zip="$(mktemp -d)/fn.zip"
  (cd backend && zip -q "$zip" index.mjs handler.mjs)
  aws lambda update-function-code --region "$REGION" --function-name "$fn" --zip-file "fileb://$zip" \
    --query LastUpdateStatus --output text
  aws lambda wait function-updated --region "$REGION" --function-name "$fn"
  rm -f "$zip"
  API_BASE="$(aws cloudformation describe-stacks --region "$REGION" --stack-name "$stack" \
    --query "Stacks[0].Outputs[?OutputKey=='ApiEndpoint'].OutputValue" --output text)"
  save API_BASE "$API_BASE"
  log "Done. VITE_API_BASE=$API_BASE"
}

cmd_status() {
  [ -n "${CERT_ARN:-}" ] && aws acm describe-certificate --region us-east-1 --certificate-arn "$CERT_ARN" --query Certificate.Status --output text | sed 's/^/cert: /'
  [ -n "${DIST_ID:-}" ] && aws cloudfront get-distribution --id "$DIST_ID" --query 'Distribution.[Status,DomainName]' --output text | sed 's/^/distribution: /'
  [ -n "${API_BASE:-}" ] && echo "api: $API_BASE"
  return 0
}

case "${1:-}" in
  cert) cmd_cert ;; infra) cmd_infra ;; deploy) cmd_deploy ;; status) cmd_status ;; api) cmd_api ;;
  *) sed -n '2,13p' "$0"; exit 1 ;;
esac
