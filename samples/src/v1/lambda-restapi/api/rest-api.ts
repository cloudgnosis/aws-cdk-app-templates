import * as apigw from '@aws-cdk/aws-apigateway';
import * as lambda from '@aws-cdk/aws-lambda';
import * as nodelambda from '@aws-cdk/aws-lambda-nodejs';
import { Construct, Tags } from '@aws-cdk/core';

export interface RestApiProps {
  readonly message?: string;
  readonly tags?: { [key:string]: string };
}

export class RestApi extends Construct {
  readonly url: string;

  constructor(scope: Construct, id: string, props?: RestApiProps) {
    super(scope, id);

    const apiHandler = new nodelambda.NodejsFunction(this, 'api-handler', {
      runtime: lambda.Runtime.NODEJS_14_X,
      environment: {
        MESSAGE: props?.message ?? 'Hello, friend!',
      },
    });

    const restApi = new apigw.LambdaRestApi(this, 'api', {
      handler: apiHandler,
    });

    this.url = restApi.url;

    if (props?.tags) {
      const tags = Tags.of(this);
      for (const key in props?.tags) {
        tags.add(key, props.tags[key]);
      }
    }
  }
}