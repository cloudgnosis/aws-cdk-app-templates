# API Reference <a name="API Reference"></a>


## Structs <a name="Structs"></a>

### AwsCdkClosedSourceTypeScriptAppOptions <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AwsCdkClosedSourceTypeScriptAppOptions } from '@cloudgnosis/aws-cdk-app-templates'

const awsCdkClosedSourceTypeScriptAppOptions: AwsCdkClosedSourceTypeScriptAppOptions = { ... }
```

##### `name`<sup>Required</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.name"></a>

- *Type:* `string`
- *Default:* $BASEDIR

This is the name of your project.

---

##### `logging`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.logging"></a>

- *Type:* [`projen.LoggerOptions`](#projen.LoggerOptions)
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.outdir"></a>

- *Type:* `string`
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.parent"></a>

- *Type:* [`projen.Project`](#projen.Project)

The parent project, if this project is part of a bigger project.

---

##### `projenrcJson`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.projenrcJson"></a>

- *Type:* `boolean`
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.projenrcJsonOptions"></a>

- *Type:* [`projen.json.ProjenrcOptions`](#projen.json.ProjenrcOptions)
- *Default:* default options

Options for .projenrc.json.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.autoApproveOptions"></a>

- *Type:* [`projen.github.AutoApproveOptions`](#projen.github.AutoApproveOptions)
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.autoMergeOptions"></a>

- *Type:* [`projen.github.AutoMergeOptions`](#projen.github.AutoMergeOptions)
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.clobber"></a>

- *Type:* `boolean`
- *Default:* true

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.devContainer"></a>

- *Type:* `boolean`
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.github"></a>

- *Type:* `boolean`
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.githubOptions"></a>

- *Type:* [`projen.github.GitHubOptions`](#projen.github.GitHubOptions)
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.gitpod"></a>

- *Type:* `boolean`
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

- *Type:* `boolean`
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

- *Type:* [`projen.ProjectType`](#projen.ProjectType)
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `readme`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.readme"></a>

- *Type:* [`projen.SampleReadmeProps`](#projen.SampleReadmeProps)
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

##### `stale`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.stale"></a>

- *Type:* `boolean`
- *Default:* true

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.staleOptions"></a>

- *Type:* [`projen.github.StaleOptions`](#projen.github.StaleOptions)
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.vscode"></a>

- *Type:* `boolean`
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.allowLibraryDependencies"></a>

- *Type:* `boolean`
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.authorEmail"></a>

- *Type:* `string`

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.authorName"></a>

- *Type:* `string`

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.authorOrganization"></a>

- *Type:* `boolean`

Author's Organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.authorUrl"></a>

- *Type:* `string`

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.autoDetectBin"></a>

- *Type:* `boolean`
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.bin"></a>

- *Type:* {[ key: string ]: `string`}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bundledDeps`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.bundledDeps"></a>

- *Type:* `string`[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `peerDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `deps`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.deps"></a>

- *Type:* `string`[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `description`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.description"></a>

- *Type:* `string`

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.devDeps"></a>

- *Type:* `string`[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `entrypoint`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.entrypoint"></a>

- *Type:* `string`
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.homepage"></a>

- *Type:* `string`

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.keywords"></a>

- *Type:* `string`[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.license"></a>

- *Type:* `string`
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/master/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.licensed"></a>

- *Type:* `boolean`
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.maxNodeVersion"></a>

- *Type:* `string`
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.minNodeVersion"></a>

- *Type:* `string`
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.npmAccess"></a>

- *Type:* [`projen.NpmAccess`](#projen.NpmAccess)
- *Default:* for scoped packages (e.g. `foo@bar`), the default is
`NpmAccess.RESTRICTED`, for non-scoped packages, the default is
`NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmDistTag`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.npmDistTag"></a>

- *Type:* `string`
- *Default:* "latest"

Tags can be used to provide an alias instead of version numbers.

For example, a project might choose to have multiple streams of development
and use a different tag for each stream, e.g., stable, beta, dev, canary.

By default, the `latest` tag is used by npm to identify the current version
of a package, and `npm install <pkg>` (without any `@<version>` or `@<tag>`
specifier) installs the latest tag. Typically, projects only use the
`latest` tag for stable release versions, and use other tags for unstable
versions such as prereleases.

The `next` tag is used by some projects to identify the upcoming version.

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

- *Type:* `string`

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.npmRegistryUrl"></a>

- *Type:* `string`
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.npmTokenSecret"></a>

- *Type:* `string`
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.packageManager"></a>

- *Type:* [`projen.NodePackageManager`](#projen.NodePackageManager)
- *Default:* NodePackageManager.YARN

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.packageName"></a>

- *Type:* `string`
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.peerDependencyOptions"></a>

- *Type:* [`projen.PeerDependencyOptions`](#projen.PeerDependencyOptions)

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.peerDeps"></a>

- *Type:* `string`[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `projenCommand`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.projenCommand"></a>

- *Type:* `string`
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `repository`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.repository"></a>

- *Type:* `string`

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.repositoryDirectory"></a>

- *Type:* `string`

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scripts`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.scripts"></a>

- *Type:* {[ key: string ]: `string`}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.

---

##### `stability`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.stability"></a>

- *Type:* `string`

Package's Stability.

---

##### `antitamper`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.antitamper"></a>

- *Type:* `boolean`
- *Default:* true

Checks that after build there are no modified files on git.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.artifactsDirectory"></a>

- *Type:* `string`
- *Default:* "dist"

A directory which will contain artifacts to be published to npm.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.jsiiReleaseVersion"></a>

- *Type:* `string`
- *Default:* "latest"

Version requirement of `jsii-release` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.majorVersion"></a>

- *Type:* `number`
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.postBuildSteps"></a>

- *Type:* [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.prerelease"></a>

- *Type:* `string`
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `releaseBranches`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.releaseBranches"></a>

- *Type:* {[ key: string ]: [`projen.release.BranchOptions`](#projen.release.BranchOptions)}
- *Default:* no additional branches are used for release. you can use
`addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### `releaseEveryCommit`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.releaseEveryCommit"></a>

- *Type:* `boolean`
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.releaseFailureIssue"></a>

- *Type:* `boolean`
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.releaseFailureIssueLabel"></a>

- *Type:* `string`
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### `releaseSchedule`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.releaseSchedule"></a>

- *Type:* `string`
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.releaseWorkflowName"></a>

- *Type:* `string`
- *Default:* "Release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.releaseWorkflowSetupSteps"></a>

- *Type:* [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.workflowContainerImage"></a>

- *Type:* `string`
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.defaultReleaseBranch"></a>

- *Type:* `string`
- *Default:* "main"

The name of the main release branch.

---

##### `autoApproveProjenUpgrades`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.autoApproveProjenUpgrades"></a>

- *Type:* `boolean`
- *Default:* false

Automatically approve projen upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.autoApproveUpgrades"></a>

- *Type:* `boolean`
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.buildWorkflow"></a>

- *Type:* `boolean`
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `codeCov`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.codeCov"></a>

- *Type:* `boolean`
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.codeCovTokenSecret"></a>

- *Type:* `string`
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.copyrightOwner"></a>

- *Type:* `string`
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.copyrightPeriod"></a>

- *Type:* `string`
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### ~~`dependabot`~~<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.dependabot"></a>

- *Deprecated:* - use `depsUpgrade: DependenciesUpgradeMechanism.dependabot()`

- *Type:* `boolean`
- *Default:* false

Include dependabot configuration.

---

##### ~~`dependabotOptions`~~<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.dependabotOptions"></a>

- *Deprecated:* - use `depsUpgrade: DependenciesUpgradeMechanism.dependabot()`

- *Type:* [`projen.github.DependabotOptions`](#projen.github.DependabotOptions)
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.depsUpgrade"></a>

- *Type:* [`projen.DependenciesUpgradeMechanism`](#projen.DependenciesUpgradeMechanism)
- *Default:* DependenciesUpgradeMechanism.dependabot if dependabot is true, otherwise a DependenciesUpgradeMechanism.githubWorkflow configured from other passed-in NodeProjectOptions

How to handle dependency upgrades.

---

##### `gitignore`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.gitignore"></a>

- *Type:* `string`[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.jest"></a>

- *Type:* `boolean`
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.jestOptions"></a>

- *Type:* [`projen.JestOptions`](#projen.JestOptions)
- *Default:* default options

Jest options.

---

##### `mergifyOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.mergifyOptions"></a>

- *Type:* [`projen.github.MergifyOptions`](#projen.github.MergifyOptions)
- *Default:* default options

Options for mergify.

---

##### `mutableBuild`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.mutableBuild"></a>

- *Type:* `boolean`
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

- *Type:* `string`[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.npmignoreEnabled"></a>

- *Type:* `boolean`
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.projenDevDependency"></a>

- *Type:* `boolean`
- *Default:* true

Indicates of "projen" should be installed as a devDependency.

---

##### `projenDuringBuild`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.projenDuringBuild"></a>

- *Type:* `boolean`
- *Default:* true

Execute `projen` as the first step of the `build` task to synthesize project files.

This applies both to local builds and to CI builds.

Disabling this feature is NOT RECOMMENDED and means that manual changes to
synthesized project files will be persisted.

---

##### `projenrcJs`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.projenrcJs"></a>

- *Type:* `boolean`
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.projenrcJsOptions"></a>

- *Type:* [`projen.javascript.ProjenrcOptions`](#projen.javascript.ProjenrcOptions)
- *Default:* default options

Options for .projenrc.js.

---

##### ~~`projenUpgradeAutoMerge`~~<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.projenUpgradeAutoMerge"></a>

- *Deprecated:* use `autoApproveProjenUpgrades`.

- *Type:* `boolean`
- *Default:* false

Automatically approve projen upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `projenUpgradeSchedule`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.projenUpgradeSchedule"></a>

- *Type:* `string`[]
- *Default:* [ "0 6 * * *" ]

Customize the projenUpgrade schedule in cron expression.

---

##### `projenUpgradeSecret`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.projenUpgradeSecret"></a>

- *Type:* `string`
- *Default:* no automatic projen upgrade pull requests

Periodically submits a pull request for projen upgrades (executes `yarn projen:upgrade`).

This setting is a GitHub secret name which contains a GitHub Access Token
with `repo` and `workflow` permissions.

This token is used to submit the upgrade pull request, which will likely
include workflow updates.

To create a personal access token see https://github.com/settings/tokens

---

##### `projenVersion`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.projenVersion"></a>

- *Type:* `string`
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.pullRequestTemplate"></a>

- *Type:* `boolean`
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.pullRequestTemplateContents"></a>

- *Type:* `string`
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.release"></a>

- *Type:* `boolean`
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.releaseToNpm"></a>

- *Type:* `boolean`
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

- *Type:* `boolean`
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.workflowBootstrapSteps"></a>

- *Type:* `any`[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.workflowNodeVersion"></a>

- *Type:* `string`
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `compileBeforeTest`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.compileBeforeTest"></a>

- *Type:* `boolean`
- *Default:* if `testdir` is under `src/**`, the default is `true`, otherwise the default is `false.

Compile the code before running tests.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.disableTsconfig"></a>

- *Type:* `boolean`
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `docgen`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.docgen"></a>

- *Type:* `boolean`
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.docsDirectory"></a>

- *Type:* `string`
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.entrypointTypes"></a>

- *Type:* `string`
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.eslint"></a>

- *Type:* `boolean`
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.eslintOptions"></a>

- *Type:* [`projen.EslintOptions`](#projen.EslintOptions)
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.libdir"></a>

- *Type:* `string`
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `package`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.package"></a>

- *Type:* `boolean`
- *Default:* true

Defines a `yarn package` command that will produce a tarball and place it under `dist/js`.

---

##### `projenrcTs`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.projenrcTs"></a>

- *Type:* `boolean`
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.projenrcTsOptions"></a>

- *Type:* [`projen.typescript.ProjenrcOptions`](#projen.typescript.ProjenrcOptions)

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.sampleCode"></a>

- *Type:* `boolean`
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.srcdir"></a>

- *Type:* `string`
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.testdir"></a>

- *Type:* `string`
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.tsconfig"></a>

- *Type:* [`projen.TypescriptConfigOptions`](#projen.TypescriptConfigOptions)

Custom TSConfig.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.typescriptVersion"></a>

- *Type:* `string`
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `cdkVersion`<sup>Required</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.cdkVersion"></a>

- *Type:* `string`
- *Default:* "1.95.2"

AWS CDK version to use.

---

##### `appEntrypoint`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.appEntrypoint"></a>

- *Type:* `string`
- *Default:* "main.ts"

The CDK app's entrypoint (relative to the source directory, which is "src" by default).

---

##### `cdkDependencies`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.cdkDependencies"></a>

- *Type:* `string`[]

Which AWS CDK modules (those that start with "@aws-cdk/") this app uses.

---

##### `cdkVersionPinning`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.cdkVersionPinning"></a>

- *Type:* `boolean`
- *Default:* false

Use pinned version instead of caret version for CDK.

You can use this to prevent yarn to mix versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `context`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.context"></a>

- *Type:* {[ key: string ]: `string`}

Additional context to include in `cdk.json`.

---

##### `requireApproval`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.requireApproval"></a>

- *Type:* [`projen.CdkApprovalLevel`](#projen.CdkApprovalLevel)
- *Default:* CdkApprovalLevel.BROADENING

To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

---

##### `closedSource`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions.property.closedSource"></a>

- *Type:* `boolean`
- *Default:* true

If set to true, some default values are modified compared to the settings for AwsCdkTypeScriptApp Specifically, the following default values are changed: - licensed is false by default - githubOptions.mergify is false by default.

---

### AwsCdkTsLambdaRestApiAppOptions <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AwsCdkTsLambdaRestApiAppOptions } from '@cloudgnosis/aws-cdk-app-templates'

const awsCdkTsLambdaRestApiAppOptions: AwsCdkTsLambdaRestApiAppOptions = { ... }
```

##### `name`<sup>Required</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.name"></a>

- *Type:* `string`
- *Default:* $BASEDIR

This is the name of your project.

---

##### `logging`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.logging"></a>

- *Type:* [`projen.LoggerOptions`](#projen.LoggerOptions)
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.outdir"></a>

- *Type:* `string`
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.parent"></a>

- *Type:* [`projen.Project`](#projen.Project)

The parent project, if this project is part of a bigger project.

---

##### `projenrcJson`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.projenrcJson"></a>

- *Type:* `boolean`
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.projenrcJsonOptions"></a>

- *Type:* [`projen.json.ProjenrcOptions`](#projen.json.ProjenrcOptions)
- *Default:* default options

Options for .projenrc.json.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.autoApproveOptions"></a>

- *Type:* [`projen.github.AutoApproveOptions`](#projen.github.AutoApproveOptions)
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.autoMergeOptions"></a>

- *Type:* [`projen.github.AutoMergeOptions`](#projen.github.AutoMergeOptions)
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.clobber"></a>

- *Type:* `boolean`
- *Default:* true

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.devContainer"></a>

- *Type:* `boolean`
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.github"></a>

- *Type:* `boolean`
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.githubOptions"></a>

- *Type:* [`projen.github.GitHubOptions`](#projen.github.GitHubOptions)
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.gitpod"></a>

- *Type:* `boolean`
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

- *Type:* `boolean`
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

- *Type:* [`projen.ProjectType`](#projen.ProjectType)
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `readme`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.readme"></a>

- *Type:* [`projen.SampleReadmeProps`](#projen.SampleReadmeProps)
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

##### `stale`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.stale"></a>

- *Type:* `boolean`
- *Default:* true

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.staleOptions"></a>

- *Type:* [`projen.github.StaleOptions`](#projen.github.StaleOptions)
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.vscode"></a>

- *Type:* `boolean`
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.allowLibraryDependencies"></a>

- *Type:* `boolean`
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.authorEmail"></a>

- *Type:* `string`

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.authorName"></a>

- *Type:* `string`

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.authorOrganization"></a>

- *Type:* `boolean`

Author's Organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.authorUrl"></a>

- *Type:* `string`

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.autoDetectBin"></a>

- *Type:* `boolean`
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.bin"></a>

- *Type:* {[ key: string ]: `string`}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bundledDeps`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.bundledDeps"></a>

- *Type:* `string`[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `peerDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `deps`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.deps"></a>

- *Type:* `string`[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `description`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.description"></a>

- *Type:* `string`

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.devDeps"></a>

- *Type:* `string`[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `entrypoint`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.entrypoint"></a>

- *Type:* `string`
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.homepage"></a>

- *Type:* `string`

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.keywords"></a>

- *Type:* `string`[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.license"></a>

- *Type:* `string`
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/master/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.licensed"></a>

- *Type:* `boolean`
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.maxNodeVersion"></a>

- *Type:* `string`
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.minNodeVersion"></a>

- *Type:* `string`
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.npmAccess"></a>

- *Type:* [`projen.NpmAccess`](#projen.NpmAccess)
- *Default:* for scoped packages (e.g. `foo@bar`), the default is
`NpmAccess.RESTRICTED`, for non-scoped packages, the default is
`NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmDistTag`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.npmDistTag"></a>

- *Type:* `string`
- *Default:* "latest"

Tags can be used to provide an alias instead of version numbers.

For example, a project might choose to have multiple streams of development
and use a different tag for each stream, e.g., stable, beta, dev, canary.

By default, the `latest` tag is used by npm to identify the current version
of a package, and `npm install <pkg>` (without any `@<version>` or `@<tag>`
specifier) installs the latest tag. Typically, projects only use the
`latest` tag for stable release versions, and use other tags for unstable
versions such as prereleases.

The `next` tag is used by some projects to identify the upcoming version.

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

- *Type:* `string`

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.npmRegistryUrl"></a>

- *Type:* `string`
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.npmTokenSecret"></a>

- *Type:* `string`
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.packageManager"></a>

- *Type:* [`projen.NodePackageManager`](#projen.NodePackageManager)
- *Default:* NodePackageManager.YARN

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.packageName"></a>

- *Type:* `string`
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.peerDependencyOptions"></a>

- *Type:* [`projen.PeerDependencyOptions`](#projen.PeerDependencyOptions)

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.peerDeps"></a>

- *Type:* `string`[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `projenCommand`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.projenCommand"></a>

- *Type:* `string`
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `repository`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.repository"></a>

- *Type:* `string`

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.repositoryDirectory"></a>

- *Type:* `string`

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scripts`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.scripts"></a>

- *Type:* {[ key: string ]: `string`}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.

---

##### `stability`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.stability"></a>

- *Type:* `string`

Package's Stability.

---

##### `antitamper`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.antitamper"></a>

- *Type:* `boolean`
- *Default:* true

Checks that after build there are no modified files on git.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.artifactsDirectory"></a>

- *Type:* `string`
- *Default:* "dist"

A directory which will contain artifacts to be published to npm.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.jsiiReleaseVersion"></a>

- *Type:* `string`
- *Default:* "latest"

Version requirement of `jsii-release` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.majorVersion"></a>

- *Type:* `number`
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.postBuildSteps"></a>

- *Type:* [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.prerelease"></a>

- *Type:* `string`
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `releaseBranches`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.releaseBranches"></a>

- *Type:* {[ key: string ]: [`projen.release.BranchOptions`](#projen.release.BranchOptions)}
- *Default:* no additional branches are used for release. you can use
`addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### `releaseEveryCommit`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.releaseEveryCommit"></a>

- *Type:* `boolean`
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.releaseFailureIssue"></a>

- *Type:* `boolean`
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.releaseFailureIssueLabel"></a>

- *Type:* `string`
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### `releaseSchedule`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.releaseSchedule"></a>

- *Type:* `string`
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.releaseWorkflowName"></a>

- *Type:* `string`
- *Default:* "Release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.releaseWorkflowSetupSteps"></a>

- *Type:* [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.workflowContainerImage"></a>

- *Type:* `string`
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.defaultReleaseBranch"></a>

- *Type:* `string`
- *Default:* "main"

The name of the main release branch.

---

##### `autoApproveProjenUpgrades`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.autoApproveProjenUpgrades"></a>

- *Type:* `boolean`
- *Default:* false

Automatically approve projen upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.autoApproveUpgrades"></a>

- *Type:* `boolean`
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.buildWorkflow"></a>

- *Type:* `boolean`
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `codeCov`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.codeCov"></a>

- *Type:* `boolean`
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.codeCovTokenSecret"></a>

- *Type:* `string`
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.copyrightOwner"></a>

- *Type:* `string`
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.copyrightPeriod"></a>

- *Type:* `string`
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### ~~`dependabot`~~<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.dependabot"></a>

- *Deprecated:* - use `depsUpgrade: DependenciesUpgradeMechanism.dependabot()`

- *Type:* `boolean`
- *Default:* false

Include dependabot configuration.

---

##### ~~`dependabotOptions`~~<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.dependabotOptions"></a>

- *Deprecated:* - use `depsUpgrade: DependenciesUpgradeMechanism.dependabot()`

- *Type:* [`projen.github.DependabotOptions`](#projen.github.DependabotOptions)
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.depsUpgrade"></a>

- *Type:* [`projen.DependenciesUpgradeMechanism`](#projen.DependenciesUpgradeMechanism)
- *Default:* DependenciesUpgradeMechanism.dependabot if dependabot is true, otherwise a DependenciesUpgradeMechanism.githubWorkflow configured from other passed-in NodeProjectOptions

How to handle dependency upgrades.

---

##### `gitignore`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.gitignore"></a>

- *Type:* `string`[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.jest"></a>

- *Type:* `boolean`
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.jestOptions"></a>

- *Type:* [`projen.JestOptions`](#projen.JestOptions)
- *Default:* default options

Jest options.

---

##### `mergifyOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.mergifyOptions"></a>

- *Type:* [`projen.github.MergifyOptions`](#projen.github.MergifyOptions)
- *Default:* default options

Options for mergify.

---

##### `mutableBuild`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.mutableBuild"></a>

- *Type:* `boolean`
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

- *Type:* `string`[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.npmignoreEnabled"></a>

- *Type:* `boolean`
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.projenDevDependency"></a>

- *Type:* `boolean`
- *Default:* true

Indicates of "projen" should be installed as a devDependency.

---

##### `projenDuringBuild`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.projenDuringBuild"></a>

- *Type:* `boolean`
- *Default:* true

Execute `projen` as the first step of the `build` task to synthesize project files.

This applies both to local builds and to CI builds.

Disabling this feature is NOT RECOMMENDED and means that manual changes to
synthesized project files will be persisted.

---

##### `projenrcJs`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.projenrcJs"></a>

- *Type:* `boolean`
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.projenrcJsOptions"></a>

- *Type:* [`projen.javascript.ProjenrcOptions`](#projen.javascript.ProjenrcOptions)
- *Default:* default options

Options for .projenrc.js.

---

##### ~~`projenUpgradeAutoMerge`~~<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.projenUpgradeAutoMerge"></a>

- *Deprecated:* use `autoApproveProjenUpgrades`.

- *Type:* `boolean`
- *Default:* false

Automatically approve projen upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `projenUpgradeSchedule`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.projenUpgradeSchedule"></a>

- *Type:* `string`[]
- *Default:* [ "0 6 * * *" ]

Customize the projenUpgrade schedule in cron expression.

---

##### `projenUpgradeSecret`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.projenUpgradeSecret"></a>

- *Type:* `string`
- *Default:* no automatic projen upgrade pull requests

Periodically submits a pull request for projen upgrades (executes `yarn projen:upgrade`).

This setting is a GitHub secret name which contains a GitHub Access Token
with `repo` and `workflow` permissions.

This token is used to submit the upgrade pull request, which will likely
include workflow updates.

To create a personal access token see https://github.com/settings/tokens

---

##### `projenVersion`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.projenVersion"></a>

- *Type:* `string`
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.pullRequestTemplate"></a>

- *Type:* `boolean`
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.pullRequestTemplateContents"></a>

- *Type:* `string`
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.release"></a>

- *Type:* `boolean`
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.releaseToNpm"></a>

- *Type:* `boolean`
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

- *Type:* `boolean`
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.workflowBootstrapSteps"></a>

- *Type:* `any`[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.workflowNodeVersion"></a>

- *Type:* `string`
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `compileBeforeTest`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.compileBeforeTest"></a>

- *Type:* `boolean`
- *Default:* if `testdir` is under `src/**`, the default is `true`, otherwise the default is `false.

Compile the code before running tests.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.disableTsconfig"></a>

- *Type:* `boolean`
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `docgen`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.docgen"></a>

- *Type:* `boolean`
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.docsDirectory"></a>

- *Type:* `string`
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.entrypointTypes"></a>

- *Type:* `string`
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.eslint"></a>

- *Type:* `boolean`
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.eslintOptions"></a>

- *Type:* [`projen.EslintOptions`](#projen.EslintOptions)
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.libdir"></a>

- *Type:* `string`
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `package`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.package"></a>

- *Type:* `boolean`
- *Default:* true

Defines a `yarn package` command that will produce a tarball and place it under `dist/js`.

---

##### `projenrcTs`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.projenrcTs"></a>

- *Type:* `boolean`
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.projenrcTsOptions"></a>

- *Type:* [`projen.typescript.ProjenrcOptions`](#projen.typescript.ProjenrcOptions)

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.sampleCode"></a>

- *Type:* `boolean`
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.srcdir"></a>

- *Type:* `string`
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.testdir"></a>

- *Type:* `string`
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.tsconfig"></a>

- *Type:* [`projen.TypescriptConfigOptions`](#projen.TypescriptConfigOptions)

Custom TSConfig.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.typescriptVersion"></a>

- *Type:* `string`
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `cdkVersion`<sup>Required</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.cdkVersion"></a>

- *Type:* `string`
- *Default:* "1.116.0"

AWS CDK version to use.

---

##### `appEntrypoint`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.appEntrypoint"></a>

- *Type:* `string`
- *Default:* "main.ts"

The CDK app's entrypoint (relative to the source directory, which is "src" by default).

---

##### `cdkDependencies`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.cdkDependencies"></a>

- *Type:* `string`[]

Which AWS CDK modules (those that start with "@aws-cdk/") this app uses.

---

##### `cdkVersionPinning`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.cdkVersionPinning"></a>

- *Type:* `boolean`
- *Default:* false

Use pinned version instead of caret version for CDK.

You can use this to prevent yarn to mix versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `context`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.context"></a>

- *Type:* {[ key: string ]: `string`}

Additional context to include in `cdk.json`.

---

##### `requireApproval`<sup>Optional</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions.property.requireApproval"></a>

- *Type:* [`projen.CdkApprovalLevel`](#projen.CdkApprovalLevel)
- *Default:* CdkApprovalLevel.BROADENING

To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

---

## Classes <a name="Classes"></a>

### AwsCdkClosedSourceTypeScriptApp <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptApp"></a>

Closed source CDK App, Typescript.

#### Initializers <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptApp.Initializer"></a>

```typescript
import { AwsCdkClosedSourceTypeScriptApp } from '@cloudgnosis/aws-cdk-app-templates'

new AwsCdkClosedSourceTypeScriptApp(options: AwsCdkClosedSourceTypeScriptAppOptions)
```

##### `options`<sup>Required</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptApp.parameter.options"></a>

- *Type:* [`@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions`](#@cloudgnosis/aws-cdk-app-templates.AwsCdkClosedSourceTypeScriptAppOptions)

---





### AwsCdkTsLambdaRestApiApp <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiApp"></a>

Project type that provides the same features as [[AwsCdkTypeScriptApp]].

Includes sample code for a REST API solution using AWS Gateway and AWS Lambda.
Provides two versions of the sample app - with and without deployment pipeline.

#### Initializers <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiApp.Initializer"></a>

```typescript
import { AwsCdkTsLambdaRestApiApp } from '@cloudgnosis/aws-cdk-app-templates'

new AwsCdkTsLambdaRestApiApp(options: AwsCdkTsLambdaRestApiAppOptions)
```

##### `options`<sup>Required</sup> <a name="@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiApp.parameter.options"></a>

- *Type:* [`@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions`](#@cloudgnosis/aws-cdk-app-templates.AwsCdkTsLambdaRestApiAppOptions)

---






