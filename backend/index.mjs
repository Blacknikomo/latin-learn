// Lambda entry (nodejs24.x, ESM). The AWS SDK v3 ships with the runtime — nothing to bundle.
// All logic lives in handler.mjs; this file only wires the real DynamoDB client into it.
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, QueryCommand, UpdateCommand, PutCommand, BatchWriteCommand } from "@aws-sdk/lib-dynamodb";
import { makeHandler } from "./handler.mjs";

const doc = DynamoDBDocumentClient.from(new DynamoDBClient({}), { marshallOptions: { removeUndefinedValues: true } });

export const handler = makeHandler({
  query: i => doc.send(new QueryCommand(i)),
  update: i => doc.send(new UpdateCommand(i)),
  put: i => doc.send(new PutCommand(i)),
  batchWrite: i => doc.send(new BatchWriteCommand(i)),
}, { table: process.env.TABLE ?? "latin-progress" });
