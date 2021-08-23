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
  ],
  gitignore: [
    '.idea/',
  ],
  keywords: [
    'aws',
    'cdk',
    'projen',
    'typescript',
  ],
  description: 'Collection of project types for setting up AWS CDK-based apps with Typescript',
});
project.synth();