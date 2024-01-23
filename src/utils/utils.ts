import { AWSConfig } from "k6-jslib-aws";

export const createAwsConfig = (props: Partial<AWSConfig>): AWSConfig => {
  const region = props.region ?? __ENV.AWS_REGION;
  const accessKeyId = props.accessKeyId ?? __ENV.AWS_ACCESS_KEY_ID;
  const secretAccessKey = props.secretAccessKey ?? __ENV.AWS_SECRET_ACCESS_KEY;
  const sessionToken = props.sessionToken ?? __ENV.AWS_SESSION_TOKEN;

  if (!region) {
    throw new Error("AWS_REGION (or prop) is required.");
  }
  if (!accessKeyId) {
    throw new Error("AWS_ACCESS_KEY_ID (or prop) is required.");
  }
  if (!secretAccessKey) {
    throw new Error("AWS_SECRET_ACCESS_KEY (or prop) is required.");
  }
  if (!sessionToken) {
    throw new Error("AWS_SESSION_TOKEN (or prop) is required.");
  }

  const awsConfig = new AWSConfig({
    region,
    accessKeyId,
    secretAccessKey,
    sessionToken,
  });

  return awsConfig;
};