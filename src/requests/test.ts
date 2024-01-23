import { SageMakerClient } from "../client/sagemaker";

export function createRequests(client: SageMakerClient) {
  const EndpointName = "model";
  const model = client.createInvokeRequest({
    EndpointName,
    TargetContainerHostname: "model",
    Body: JSON.stringify({}),
  });
  return [model];
}
