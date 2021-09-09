import * as fs from 'fs';
import * as path from 'path';
import { AwsCdkTypeScriptApp, CdkApprovalLevel, TypeScriptProjectOptions, SampleDir } from 'projen';
import * as semver from 'semver';


export interface AwsCdkTsLambdaRestApiAppOptions extends TypeScriptProjectOptions {
  /**
   * AWS CDK version to use.
   *
   * @default "1.116.0"
   * @featured
   */
  readonly cdkVersion: string;

  /**
   * Use pinned version instead of caret version for CDK.
   *
   * You can use this to prevent yarn to mix versions for your CDK dependencies and to prevent auto-updates.
   * If you use experimental features this will let you define the moment you include breaking changes.
   *
   * @default false
   */
  readonly cdkVersionPinning?: boolean;

  /**
   * Which AWS CDK modules (those that start with "@aws-cdk/") this app uses.
   * @featured
   */
  readonly cdkDependencies?: string[];

  /**
   * Additional context to include in `cdk.json`.
   */
  readonly context?: { [key: string]: string };

  /**
   * The CDK app's entrypoint (relative to the source directory, which is
   * "src" by default).
   *
   * @default "main.ts"
   */
  readonly appEntrypoint?: string;

  /**
   * To protect you against unintended changes that affect your security posture,
   * the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.
   *
   * @default CdkApprovalLevel.BROADENING
   */
  readonly requireApproval?: CdkApprovalLevel;

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
