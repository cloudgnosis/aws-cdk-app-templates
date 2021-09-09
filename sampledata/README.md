# Project documentation

## Introduction


## Developer set-up

### Prerequisites

* Node.js v14.x or later
* yarn 1.x package manager installed
* git command-line tool installed
* AWS credentials for deployment

### Local installation

1. Clone the git repository
2. Run `npx projen` to perform installation/update of packages

### Sample code

This project contains sample code to deploy a REST API-style solution with an AWS Api Gateway plus to provide
an endpoint and an AWS Lambda function to serve the requests. 
The lambda function is written in Typescript.

The solution consists of an AWS CDK _construct_ named **RestApi**, which contain the infrastructure resources needed.
A _stack_ of type **SampleStack** creates an instance of this construct.

There are two versions of the sample AWS CDK App:

* **main.ts** - this app version deploys a **SampleStack** directly.
* **pipeline-main.ts** - this app version deploys a pipeline (in a **PipelineStack**), which in turn creates two _stages_ that each deploy a **SampleStack**. The pipeline uses the pipeline implementation bundled with AWS CDK, that uses AWS CodePipeline under the hood.

The default entrypoint for the AWS CDK App is `main.ts`. 
In order to change it to the pipeline app version, set the entry `appEntrypoint: 'pipeline-main.ts',` in the file `.projenrc.js`,
and then run `npx projen` to update the configuration.

In both cases, run `npx projen deploy` to deploy the AWS CDK app.

**Note:** Your AWS credentials to use for deployment should either be set via environment variables before, or be set via the _default_ local AWS profile.

