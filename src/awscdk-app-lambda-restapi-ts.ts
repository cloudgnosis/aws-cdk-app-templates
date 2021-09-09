import * as fs from 'fs';
import * as path from 'path';
import { AwsCdkTypeScriptApp, AwsCdkTypeScriptAppOptions, SampleDir } from 'projen';
import * as semver from 'semver';

export interface AwsCdkTsLambdaRestApiAppOptions extends AwsCdkTypeScriptAppOptions {
}

/**
 * Project type that provides the same features as [[AwsCdkTypeScriptApp]].
 * Includes sample code for a REST API solution using AWS Gateway and AWS Lambda.
 * Provides two versions of the sample app - with and without deployment pipeline.
 *
 *  @pjid awscdk-app-lambda-restapi-ts
 */
export class AwsCdkTsLambdaRestApiApp extends AwsCdkTypeScriptApp {
  constructor(options: AwsCdkTsLambdaRestApiAppOptions) {
    const readme = fs.readFileSync(path.join(__dirname, '..', 'sampledata', 'README.md'), 'utf-8');
    super({
      ...options,
      sampleCode: false,
      readme: {
        contents: readme,
      },
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
