import { pipelines, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { SampleStage, StageInfo } from './sample-stage';

export interface Source {
  readonly repository: string;
  readonly branch: string;
  readonly codestarConnectionArn: string;
}

export interface PipelineStackProps extends StackProps {
  readonly source: Source;
  readonly stages: StageInfo[];
}

export class PipelineStack extends Stack {
  constructor(scope: Construct, id: string, props: PipelineStackProps) {
    super(scope, id, props);

    const source = pipelines.CodePipelineSource.connection(
      props.source.repository,
      props.source.branch,
      {
        connectionArn: props.source.codestarConnectionArn,
      });

    const pipeline = new pipelines.CodePipeline(this, 'pipeline', {
      crossAccountKeys: false,
      dockerEnabledForSynth: true,
      synth: new pipelines.ShellStep('Synth', {
        input: source,
        commands: [
          'yarn install --frozen-lockfile',
          'npx projen synth',
        ],
      }),
    });

    for (const stageInfo of props.stages) {
      pipeline.addStage(new SampleStage(this, stageInfo.stageName, {
        stage: stageInfo,
      }));
    }
  }
}