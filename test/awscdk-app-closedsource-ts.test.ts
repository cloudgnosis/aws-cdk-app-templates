
import * as fs from 'fs-extra';
import { AwsCdkClosedSourceTypeScriptApp } from '../src';
// @ts-ignore
import { mkdtemp, synthSnapshot } from './testutil';


describe('Check settings specific for project type', () => {
  let tmpTestDir: string = '';
  const originalConsoleError = console.error;

  beforeEach(() => {
    tmpTestDir = mkdtemp();
    fs.ensureDirSync(tmpTestDir);
    console.error = jest.fn();
  });

  afterEach(() => {
    fs.removeSync(tmpTestDir);
    console.error = originalConsoleError;
  });

  test('Mergify is not enabled and no license file for closedSource default', () => {

    const project = new AwsCdkClosedSourceTypeScriptApp({
      outdir: tmpTestDir,
      cdkVersion: '1.116.0',
      defaultReleaseBranch: 'main',
      name: 'myproject',
    });

    const snap = synthSnapshot(project);
    expect(snap['.mergify.yml']).toBeUndefined();
    expect(snap.LICENSE).toBeUndefined();
  });

  test('Mergify is not enabled and no license file for closedSource true', () => {
    const project = new AwsCdkClosedSourceTypeScriptApp({
      outdir: tmpTestDir,
      cdkVersion: '1.116.0',
      defaultReleaseBranch: 'main',
      name: 'myproject',
      closedSource: true,
    });

    const snap = synthSnapshot(project);
    expect(snap['.mergify.yml']).toBeUndefined();
    expect(snap.LICENSE).toBeUndefined();
  });

  test('Mergify is enabled and got license file for closedSource false', () => {
    const project = new AwsCdkClosedSourceTypeScriptApp({
      outdir: tmpTestDir,
      cdkVersion: '1.116.0',
      defaultReleaseBranch: 'main',
      name: 'myproject',
      closedSource: false,
    });

    const snap = synthSnapshot(project);
    expect(snap['.mergify.yml']).toBeDefined();
    expect(snap.LICENSE).toBeDefined();
  });
});