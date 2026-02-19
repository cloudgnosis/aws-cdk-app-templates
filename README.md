**This repository has moved to https://codeberg.org/cloudgnosis/aws-cdk-app-templates**
# AWS CDK App templates

A collection of starter templates for AWS CDK App projects, using [Projen](https://github.com/projen/projen/) for project generation and management. 

## Usage

Use this package together with [Projen](https://github.com/projen/projen/) to instantiate a project setup for AWS CDK, using Typescript.

For example:

```bash
npx projen new --from @cloudgnosis/aws-cdk-app-templates awscdk-closedsource-app-ts
```

## Project types

* [awscdk-closedsource-app-ts](API.md#AwsCdkClosedSourceTypeScriptApp) - Same as projen bundled **awscdk-app-ts** project type, but defaults to not include mergify configuration, and no opeen source license.
* [awscdk-app-lambda-restapi-ts](API.md#AwsCdkTsLambdaRestApiApp) - Same as projen bundled **awscdk-app-ts** project type, but includes sample code to deploy a REST Api endpoint using API Gateway + AWS Lambda. Sample code include versions with and without deployment pipeline.

