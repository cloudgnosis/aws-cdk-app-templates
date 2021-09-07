import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { RestApi } from './api/rest-api';

export interface SampleStackProps extends StackProps {
  readonly message?: string;
  readonly tags?: { [key:string]: string };
}

export class SampleStack extends Stack {
  constructor(scope: Construct, id: string, props: SampleStackProps) {
    super(scope, id, props);

    new RestApi(this, 'sample-rest-api', {
      message: props.message,
      tags: props.tags,
    });
  }
}