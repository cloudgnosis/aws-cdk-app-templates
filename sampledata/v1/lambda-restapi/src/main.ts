import { App } from '@aws-cdk/core';
import { SampleStack } from './sample-stack';

const app = new App();

new SampleStack(app, 'my-sample-stack', {
  message: 'Hi from Api!',
  tags: {
    Environment: 'development',
    Project: 'sample project',
  },
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

app.synth();
