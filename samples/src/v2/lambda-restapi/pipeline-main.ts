import { App } from 'aws-cdk-lib';
import { PipelineStack, Source } from './pipeline-stack';

const app = new App();

const source: Source = {
  repository: 'example/sample-repo',
  branch: 'main',
  codestarConnectionArn: 'arn:aws:codestar-connections:eu-west-1:111111111111:connection/zzzzzzzz-yyyy-xxxx-aaaa-1234567890',
};

const sampleAccount = process.env.CDK_DEFAULT_ACCOUNT ?? '111111111111';
const sampleRegion = process.env.CDK_DEFAULT_REGION ?? 'eu-west-1';
const stages = [
  {
    stageName: 'dev',
    account: sampleAccount,
    region: sampleRegion,
    tags: {
      Environment: 'development',
      Project: 'sample project',
    },
  },
  {
    stageName: 'test',
    account: sampleAccount,
    region: sampleRegion,
    tags: {
      Environment: 'test',
      Project: 'sample project',
    },
  },
];

new PipelineStack(app, 'my-pipeline-stack', {
  source,
  stages,
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

app.synth();