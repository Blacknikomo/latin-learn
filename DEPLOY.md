# DEPLOY.md — hosting & deploy for https://latin.lesnik.me

Instructions for AI agents (and humans) on how this app is hosted and deployed. Read it before touching `scripts/aws.sh`, AWS resources, DNS, or running a deploy.

## Setup

Static Vite build on **private S3 + CloudFront** (not Amplify). Everything is driven by `scripts/aws.sh`; every step is idempotent.

| piece | value |
| --- | --- |
| S3 bucket | `latin-lesnik-me-site`, `eu-west-1`, Block Public Access on; readable only by CloudFront via OAC `latin-lesnik-me-site-oac` (bucket policy scoped to the distribution ARN) |
| CloudFront | alias `latin.lesnik.me`, `DefaultRootObject=index.html`, redirect HTTP→HTTPS, managed `CachingOptimized` policy, `PriceClass_100`, HTTP/2+3 |
| TLS | ACM certificate in **us-east-1** (CloudFront requirement), DNS validation |
| DNS | **Squarespace** (not Route 53) — records are added by hand: ACM validation CNAME + `latin` CNAME → `dxxxx.cloudfront.net` |
| caching | `index.html` → `no-cache`; everything else (`assets/*` hashed by Vite) → `max-age=31536000, immutable`; deploy invalidates only `/index.html` and `/favicon.svg` |
| routing | hash routes (`#/lesson/N`, `#/review`) → no SPA error-page fallback needed. If you switch to path routing, add a 403/404 → `/index.html` custom error response |

| progress API | CloudFormation stack `latin-progress-api` from `backend/template.yaml`: DynamoDB table `latin-progress` (Retain, PITR, TTL `ttl`), Lambda `latin-progress-api` (nodejs24.x), HTTP API + Cognito JWT authorizer. Cognito pool/client ids come from `.env.local`, never the repo |

Resource IDs (`CERT_ARN`, `OAC_ID`, `DIST_ID`, `CF_DOMAIN`, `API_BASE`) are cached in `deploy.env.local` (git-ignored via `*.local`). Account IDs, keys and profiles never go into the repo.

## Commands (run on the owner's Mac — needs AWS CLI v2 with credentials; `AWS_PROFILE` is respected)

```bash
scripts/aws.sh cert     # 1. request/find the ACM cert, print the validation CNAME → add it in Squarespace
scripts/aws.sh status   #    wait until "cert: ISSUED" (5–30 min); later shows distribution state
scripts/aws.sh infra    # 2. bucket + OAC + distribution + bucket policy, prints the CloudFront domain
                        #    → add CNAME latin → <that domain> in Squarespace
npm run deploy          # 3. npm run check + build + s3 sync + invalidation (= scripts/aws.sh deploy)

scripts/aws.sh api      # progress-sync backend: backend tests, stack deploy, Lambda code upload;
                        #    prints VITE_API_BASE → put it in .env.local, then npm run deploy
```

Sync is baked in at build time: `npm run deploy` reads `.env.local` (template `.env.example`). Backend change → `scripts/aws.sh api` first, then the site.

Overrides via env: `DOMAIN`, `BUCKET`, `REGION`.

## Rules for agents

- The Cowork/cloud sandbox cannot reach AWS endpoints, and Terminal cannot be typed into from there — **Denis runs these commands himself**; ask him to paste output when something fails.
- Deploy only when asked. `npm run deploy` runs `npm run check` first; never skip it.
- Do not add a CI deploy (GitHub Actions) without an ADR in the vault — it needs an IAM OIDC role.
- Provisioning status and pending DNS steps live in the vault's `Open Questions.md`, not here.
