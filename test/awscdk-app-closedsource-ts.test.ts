
import { AwsCdkClosedSourceTypeScriptApp } from '../src';

describe('Check settings specific for project type', () => {
  test('Mergify is not enabled for closedSource default', () => {
    const project = new AwsCdkClosedSourceTypeScriptApp({
      cdkVersion: '1.116.0',
      defaultReleaseBranch: 'main',
      name: 'myproject',
    });

    project.synth();

    const hasNoMergifyConfig = project.github && !project.github?.mergify;
    expect(hasNoMergifyConfig).toBeTruthy();
  });

  test('Mergify is not enabled for closedSource true', () => {
    const project = new AwsCdkClosedSourceTypeScriptApp({
      cdkVersion: '1.116.0',
      defaultReleaseBranch: 'main',
      name: 'myproject',
      closedSource: true,
    });

    project.synth();

    const hasNoMergifyConfig = project.github && !project.github?.mergify;
    expect(hasNoMergifyConfig).toBeTruthy();
  });

  test('Mergify is not enabled for closedSource false', () => {
    const project = new AwsCdkClosedSourceTypeScriptApp({
      cdkVersion: '1.116.0',
      defaultReleaseBranch: 'main',
      name: 'myproject',
      closedSource: false,
    });

    project.synth();

    const hasNoMergifyConfig = project.github && !project.github?.mergify;
    expect(hasNoMergifyConfig).toBeFalsy();
  });
});