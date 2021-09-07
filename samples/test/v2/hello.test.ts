import '@aws-cdk/assert/jest';
import { App } from 'aws-cdk-lib';
import { MyStack } from '../src/hello';

test('Snapshot', () => {
  const app = new App();
  const stack = new MyStack(app, 'test');

  expect(stack).not.toHaveResource('AWS::S3::Bucket');
  expect(app.synth().getStackArtifact(stack.artifactId).template).toMatchSnapshot();
});