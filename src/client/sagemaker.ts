// import { AWSConfig, SignatureV4 } from 'https://jslib.k6.io/aws/0.11.0/aws.js'
import { InvokeEndpointInput } from "@aws-sdk/client-sagemaker-runtime";

// Using Invoke Props from AWS SDK and allow for `Body` additionally also `string`
type SageMakerInvokeProps = Omit<InvokeEndpointInput, "Body"> & { Body: string | Uint8Array };

// Idea from: https://github.com/grafana/k6-jslib-aws/blob/main/src/internal/s3.ts#L209
export class SageMakerClient {

  createInvokeRequest(props: SageMakerInvokeProps) {
  }

  async invoke(props: SageMakerInvokeProps) {
  }
}
