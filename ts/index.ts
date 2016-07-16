import * as plugins from "./npmextra.plugins"
import * as paths from "./npmextra.paths";
let allData;

export let dataFor = (toolNameArg:string,cwdArg?:string) => {
    if(typeof allData == "undefined"){
        let lookupPath;
        if(cwdArg){
            lookupPath = plugins.path.join(cwdArg,"npmextra.json");
        } else {
            lookupPath = paths.configFile;
        };
        allData = plugins.smartfile.fs.toObjectSync(
            plugins.path.join(lookupPath)
        );
    };
    if(toolNameArg){
        if(allData[toolNameArg]){
            return allData[toolNameArg];
        } else {
            plugins.beautylog.error(`There is no data for ${toolNameArg}`);
            return undefined;
        }
    } else {
        return allData;
    }
}