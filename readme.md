# @pushrocks/npmextra
do more with npm

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/npmextra)
* [gitlab.com (source)](https://gitlab.com/pushrocks/npmextra)
* [github.com (source mirror)](https://github.com/pushrocks/npmextra)
* [docs (typedoc)](https://pushrocks.gitlab.io/npmextra/)

## Status for master

Status Category | Status Badge
-- | --
GitLab Pipelines | [![pipeline status](https://gitlab.com/pushrocks/npmextra/badges/master/pipeline.svg)](https://lossless.cloud)
GitLab Pipline Test Coverage | [![coverage report](https://gitlab.com/pushrocks/npmextra/badges/master/coverage.svg)](https://lossless.cloud)
npm | [![npm downloads per month](https://badgen.net/npm/dy/@pushrocks/npmextra)](https://lossless.cloud)
Snyk | [![Known Vulnerabilities](https://badgen.net/snyk/pushrocks/npmextra)](https://lossless.cloud)
TypeScript Support | [![TypeScript](https://badgen.net/badge/TypeScript/>=%203.x/blue?icon=typescript)](https://lossless.cloud)
node Support | [![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
Code Style | [![Code Style](https://badgen.net/badge/style/prettier/purple)](https://lossless.cloud)
PackagePhobia (total standalone install weight) | [![PackagePhobia](https://badgen.net/packagephobia/install/@pushrocks/npmextra)](https://lossless.cloud)
PackagePhobia (package size on registry) | [![PackagePhobia](https://badgen.net/packagephobia/publish/@pushrocks/npmextra)](https://lossless.cloud)
BundlePhobia (total size when bundled) | [![BundlePhobia](https://badgen.net/bundlephobia/minzip/@pushrocks/npmextra)](https://lossless.cloud)
Platform support | [![Supports Windows 10](https://badgen.net/badge/supports%20Windows%2010/yes/green?icon=windows)](https://lossless.cloud) [![Supports Mac OS X](https://badgen.net/badge/supports%20Mac%20OS%20X/yes/green?icon=apple)](https://lossless.cloud)

## Usage

Use TypeScript for best in class instellisense.

## Using npmextra for managing toolconfigs

The main purpose of npmextra is to configure different tools using one npmextra.json. This way complex setups avoid additional complexity caused by too many configuration files.

npmextra.json

```json
{
  "sometool": {
    "defaultKey1": "awesomeValueFromConfig"
  }
}
```

```typescript
import { Npmextra } from 'npmextra';

let myNpmExtra = new Npmextra('my/path/to/cwd'); // cwd argument is optional
mergedData = myNpmExtra.dataFor('sometool', {
  // gets merged with whatever is in the configfile
  defaultKey1: 'defaultValue1', // so this will get overwritten with "awesomeValueFromConfig"
  defaultKey2: 'defaultValue2', // this one will pass through unaltered
});
```

### Tools that already use the config feature of npmextra

- [npmts](https://www.npmjs.com/package/npmts)
- [npmci](https://www.npmjs.com/package/npmci)
- [npmdocker](https://www.npmjs.com/package/npmdocker)

## Using the KeyValueStore


## Contribution

We are always happy for code contributions. If you are not the code contributing type that is ok. Still, maintaining Open Source repositories takes considerable time and thought. If you like the quality of what we do and our modules are useful to you we would appreciate a little monthly contribution: You can [contribute one time](https://lossless.link/contribute-onetime) or [contribute monthly](https://lossless.link/contribute). :)

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
