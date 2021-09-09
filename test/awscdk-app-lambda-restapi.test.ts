import * as path from 'path';
import * as fs from 'fs-extra';
import { AwsCdkTsLambdaRestApiApp } from '../src';
// @ts-ignore
import { mkdtemp, synthSnapshot } from './testutil';

describe('Check generated sample files', () => {
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

  test('That expected files are present', () => {
    const project = new AwsCdkTsLambdaRestApiApp({
      outdir: tmpTestDir,
      cdkVersion: '1.116.0',
      defaultReleaseBranch: 'main',
      name: 'myproject',
    });

    const generalFiles = ['main.ts', 'pipeline-main.ts', 'pipeline-stack.ts', 'sample-stage.ts', 'sample-stack.ts'];
    const usecaseFiles = ['api/rest-api.ts', 'api/rest-api.api-handler.ts'];
    const files = generalFiles.concat(usecaseFiles);
    const snap = synthSnapshot(project);
    const srcFiles = files.map((value: string) => path.join(project.srcdir, value));

    for (const srcFile of srcFiles) {
      expect(snap[srcFile]).toBeDefined();
    }
  });
});
