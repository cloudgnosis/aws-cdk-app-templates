import * as path from 'path';
import { AwsCdkTypeScriptApp, AwsCdkTypeScriptAppOptions, SampleDir } from 'projen';
import * as semver from 'semver';
import * as fs from 'fs';

export interface AwsCdkTsLambdaRestApiAppOptions extends AwsCdkTypeScriptAppOptions {
  /**
   * For AWS CDK applications, set to source file for the entry point of the app.
   * The file is relative to the source directory. Set to 'pipeline-main.ts'
   * to use the pipeline version of the sample code.
   * @default 'main.ts'
   * @featured
   */
  readonly appEntrypoint?: string;
}

export class AwsCdkTsLambdaRestApiApp extends AwsCdkTypeScriptApp {
  constructor(options: AwsCdkTsLambdaRestApiAppOptions) {
    const readme = fs.readFileSync(path.join(__dirname, '..', 'sampledata', 'README.md'), 'utf-8');
    super({
      ...options,
      sampleCode: false,
      readme: {
        contents: readme,
      }
    });

    const cdkMajorVersion = semver.minVersion(this.cdkVersion)?.major ?? 1;
    if (cdkMajorVersion === 1) {
      this.addCdkDependency(
        '@aws-cdk/aws-apigateway',
        '@aws-cdk/aws-lambda',
        '@aws-cdk/aws-lambda-nodejs',
        '@aws-cdk/pipelines');
    }

    const versionDir = cdkMajorVersion > 1 ? 'v2' : 'v1';
    new SampleDir(this, this.srcdir, {
      sourceDir: path.join(__dirname, '..', 'sampledata', versionDir, 'lambda-restapi', 'src'),
    });
  }
}
