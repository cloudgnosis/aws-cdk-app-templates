import { AwsCdkTypeScriptApp, AwsCdkTypeScriptAppOptions } from 'projen';

export interface AwsCdkClosedSourceTypeScriptAppOptions extends AwsCdkTypeScriptAppOptions {
  /**
   * If set to true, some default values are modified compared to the settings for AwsCdkTypeScriptApp
   * Specifically, the following default values are changed:
   * - licensed is false by default
   * - githubOptions.mergfify is false by default
   * @default The default is true.
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
    });
  }
}