# npmextra
do more with npm.

npmextra is a hub for a series of js tools that help writing, documenting and maintaining npm modules.

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/npmpage)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://gitlab.com/pushrocks/npmpage)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/npmpage)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/npmpage/)

## Status for master
[![build status](https://gitlab.com/pushrocks/npmpage/badges/master/build.svg)](https://gitlab.com/pushrocks/npmpage/commits/master)
[![coverage report](https://gitlab.com/pushrocks/npmpage/badges/master/coverage.svg)](https://gitlab.com/pushrocks/npmpage/commits/master)
[![Dependency Status](https://david-dm.org/pushrocks/npmpage.svg)](https://david-dm.org/pushrocks/npmpage)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/npmpage/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/npmpage/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/npmpage/badges/code.svg)](https://www.bithound.io/github/pushrocks/npmpage)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
The main purpose of npmextra is to configure different tools using one npmextra.json. This way complex setups avaoid complexity through many configuration files.

npmextra.json
```json
{
    "sometool": {
        "defaultKey1": "awesomeValueFromConfig"
    }
}
```

```typescript
import * as npmextra from 'npmextra'

npmextra.dataFor({
    toolName:'sometool',
    defaultSettings: { // gets merged with whatever is in the configfile
        defaultKey1: 'defaultValue1', // so this will get overwritten with "awesomeValueFromConfig"
        defaultKey2: 'defaultValue2' // this one will pass through unaltered
    },
    cwd?: string // lets you specifiy a custom current working directory to look for the npmextra.json
})
```

[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)
