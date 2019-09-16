# @pushrocks/npmextra
do more with npm

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/npmextra)
* [gitlab.com (source)](https://gitlab.com/pushrocks/npmextra)
* [github.com (source mirror)](https://github.com/pushrocks/npmextra)
* [docs (typedoc)](https://pushrocks.gitlab.io/npmextra/)

## Status for master
[![build status](https://gitlab.com/pushrocks/npmextra/badges/master/build.svg)](https://gitlab.com/pushrocks/npmextra/commits/master)
[![coverage report](https://gitlab.com/pushrocks/npmextra/badges/master/coverage.svg)](https://gitlab.com/pushrocks/npmextra/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@pushrocks/npmextra.svg)](https://www.npmjs.com/package/@pushrocks/npmextra)
[![Known Vulnerabilities](https://snyk.io/test/npm/@pushrocks/npmextra/badge.svg)](https://snyk.io/test/npm/@pushrocks/npmextra)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

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
  defaultKey2: 'defaultValue2' // this one will pass through unaltered
});
```

### Tools that already use the config feature of npmextra

- [npmts](https://www.npmjs.com/package/npmts)
- [npmci](https://www.npmjs.com/package/npmci)
- [npmdocker](https://www.npmjs.com/package/npmdocker)

## Using the KeyValueStore

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
