import { SageMakerClient } from "./client/sagemaker";
import { createRequests } from "./requests/test";
import { createAwsConfig } from "./utils/utils";

// Prepare
const awsConfig = createAwsConfig({ region: "us-east-1" });
const client = new SageMakerClient();
const requests = createRequests(client);