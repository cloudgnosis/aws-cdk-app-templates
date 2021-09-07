import { Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { SampleStack } from './sample-stack';

export interface StageInfo {
  readonly stageName: string;
  readonly account: string;
  readonly region: string;
  readonly tags?: { [key: string]: string };
}

export interface SampleStageProps extends StageProps {
  readonly stage: StageInfo;
}

export class SampleStage extends Stage {
  constructor(scope: Construct, id: string, props: SampleStageProps) {
    super(scope, id, props);

    new SampleStack(this, 'sample-stack', {
      message: `Hi from ${props.stage.stageName} API!`,
      tags: props.stage.tags,
      env: {
        account: props.stage.account,
        region: props.stage.region,
      },
    });
  }
}