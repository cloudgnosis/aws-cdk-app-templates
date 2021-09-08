const { JsiiProject, NpmAccess } = require('projen');
const project = new JsiiProject({
  author: 'Erik Lundevall Zara',
  authorAddress: '45368867+eriklz@users.noreply.github.com',
  defaultReleaseBranch: 'main',
  name: '@cloudgnosis/aws-cdk-app-templates',
  repositoryUrl: 'git@github.com:cloudgnosis/aws-cdk-app-templates.git',
  minNodeVersion: '14.15.0',
  npmAccess: NpmAccess.PUBLIC,
  peerDeps: [
    'projen',
    'semver',
  ],
  devDeps: [
    '@types/semver',
    '@types/fs-extra',
    'fs-extra',
    'glob',
  ],
  gitignore: [
    '.idea/',
  ],
  jestOptions: {
    typescriptConfig: {
      exclude: [
        'sampledata/**/*.ts',
      ],
    },
  },
  keywords: [
    'aws',
    'cdk',
    'projen',
    'typescript',
  ],
  description: 'Collection of project types for setting up AWS CDK-based apps with Typescript',
});
project.synth();