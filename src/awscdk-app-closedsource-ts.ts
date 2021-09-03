import { AwsCdkTypeScriptApp, AwsCdkTypeScriptAppOptions } from 'projen';

export interface AwsCdkClosedSourceTypeScriptAppOptions extends AwsCdkTypeScriptAppOptions {
  /**
   * If set to true, some default values are modified compared to the settings for AwsCdkTypeScriptApp
   * Specifically, the following default values are changed:
   * - licensed is false by default
   * - githubOptions.mergify is false by default
   * @default true
   * @featured
   */
  readonly closedSource?: boolean;
}

/**
 * Closed source CDK App, Typescript
 *
 * @pjid awscdk-closedsource-app-ts
 */
export class AwsCdkClosedSourceTypeScriptApp extends AwsCdkTypeScriptApp {
  constructor(options: AwsCdkClosedSourceTypeScriptAppOptions) {
    super({
      licensed: options.closedSource === undefined ? false : !options.closedSource,
      githubOptions: {
        ...options.githubOptions,
        mergify: options.closedSource === undefined ? false : !options.closedSource,
      },
      ...options,
      cdkVersion: options.cdkVersion ?? '1.116.0',
    });
  }
}