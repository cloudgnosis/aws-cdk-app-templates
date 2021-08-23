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

