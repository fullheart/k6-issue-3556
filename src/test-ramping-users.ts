import { createAwsConfig } from "./utils/utils";

// Prepare
const awsConfig = createAwsConfig({ region: "us-east-1" });
console.log(awsConfig);