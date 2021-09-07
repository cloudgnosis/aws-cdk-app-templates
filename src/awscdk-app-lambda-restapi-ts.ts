import { AwsCdkTypeScriptApp, AwsCdkTypeScriptAppOptions, SampleDir } from 'projen';
import * as semver from 'semver';
import * as path from 'path';


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
    const cdkVersion = options.cdkVersion ?? '1.116.0';
    const cdkMajorVersion = semver.minVersion(cdkVersion)?.major ?? 1;
    let cdkDeps: string[] = [];
    if (cdkMajorVersion === 1) {
      cdkDeps.push(
        '@aws-cdk/aws-apigateway',
        '@aws-cdk/aws-lambda',
        '@aws-cdk/aws-lambda-nodejs',
        '@aws-cdk/pipelines');
    }
    super({
      ...options,
      cdkVersion,
      sampleCode: false,
      cdkDependencies: cdkDeps,
    });

    const versionDir = cdkMajorVersion > 1 ? 'v2' : 'v1';
    new SampleDir(this, this.srcdir, {
      sourceDir: path.join(__dirname, '..', 'samples', 'src', versionDir, 'lambda-restapi'),
    });

    new SampleDir(this, this.testdir, {
      sourceDir: path.join(__dirname, '..', 'samples', 'test', versionDir, 'lambda-restapi'),
    });
  }
}
