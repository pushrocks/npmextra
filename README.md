# npmextra
do more with npm

npmextra is a hub for a series of js tools that help writing, documenting and maintaining npm modules.

## Usage
The main purpose of npmextra is to configure different tools using one npmextra.json. This way complex setups avaoid complexity through many configuration files.

```typescript
let npmextra = require("npmextra");
npmextra.dataFor({
    toolName:"sometool",

});
```