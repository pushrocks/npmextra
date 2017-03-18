# npmextra
do more with npm

## Availabililty
[![npm](https://pushrocks.gitlab.io/assets/repo-button-npm.svg)](https://www.npmjs.com/package/npmextra)
[![git](https://pushrocks.gitlab.io/assets/repo-button-git.svg)](https://GitLab.com/pushrocks/npmextra)
[![git](https://pushrocks.gitlab.io/assets/repo-button-mirror.svg)](https://github.com/pushrocks/npmextra)
[![docs](https://pushrocks.gitlab.io/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/npmextra/)

## Status for master
[![build status](https://GitLab.com/pushrocks/npmextra/badges/master/build.svg)](https://GitLab.com/pushrocks/npmextra/commits/master)
[![coverage report](https://GitLab.com/pushrocks/npmextra/badges/master/coverage.svg)](https://GitLab.com/pushrocks/npmextra/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/npmextra.svg)](https://www.npmjs.com/package/npmextra)
[![Dependency Status](https://david-dm.org/pushrocks/npmextra.svg)](https://david-dm.org/pushrocks/npmextra)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/npmextra/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/npmextra/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/npmextra/badges/code.svg)](https://www.bithound.io/github/pushrocks/npmextra)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
Use TypeScript for best in class instellisense.

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
import { Npmextra } from 'npmextra'

let myNpmExtra = new Npmextra('my/path/to/cwd') // cwd argument is optional 
mergedData = myNpmExtra.dataFor(
    'sometool',
    { // gets merged with whatever is in the configfile
        defaultKey1: 'defaultValue1', // so this will get overwritten with "awesomeValueFromConfig"
        defaultKey2: 'defaultValue2' // this one will pass through unaltered
    }
)
```

For further information read the linked docs at the top of this README.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://push.rocks)
