const { JsiiProject } = require('projen');
const project = new JsiiProject({
  author: 'Erik Lundevall Zara',
  authorAddress: '45368867+eriklz@users.noreply.github.com',
  defaultReleaseBranch: 'main',
  name: '@cloudgnosis/aws-cdk-app-templates',
  repositoryUrl: 'git@github.com:cloudgnosis/aws-cdk-app-templates.git',
  peerDeps: [
    'projen',
  ],
  minNodeVersion: '^14.5.0',

  // deps: [],                          /* Runtime dependencies of this module. */
  // description: undefined,            /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                       /* Build dependencies for this module. */
  // packageName: undefined,            /* The "name" in package.json. */
  // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
  // release: undefined,                /* Add release management to this project. */
});
project.synth();