"use strict";
const plugins = require("./npmextra.plugins");
const paths = require("./npmextra.paths");
exports.dataFor = (optionsArg) => {
    // handle default settings
    if (typeof optionsArg.toolName != undefined
        && typeof optionsArg.defaultSettings != undefined) {
        let newDefaultOptions = {};
        newDefaultOptions[optionsArg.toolName] = optionsArg.defaultSettings;
        optionsArg.defaultSettings = newDefaultOptions;
    }
    ;
    // set lookup path
    let lookupPath;
    if (optionsArg.cwd) {
        lookupPath = plugins.path.join(optionsArg.cwd, "npmextra.json");
    }
    else {
        lookupPath = paths.configFile;
    }
    ;
    // get allData
    let allData;
    if (plugins.smartfile.fs.fileExistsSync(lookupPath)) {
        allData = plugins.smartfile.fs.toObjectSync(lookupPath);
    }
    else {
        plugins.beautylog.warn(`${lookupPath} is misssing!`);
        allData = {};
    }
    ;
    //assign all data
    allData = plugins.lodash.merge({}, optionsArg.defaultSettings, allData);
    if (optionsArg.toolName) {
        if (allData[optionsArg.toolName]) {
            return allData[optionsArg.toolName];
        }
        else {
            plugins.beautylog.error(`There is no data for ${optionsArg.toolName}`);
            return undefined;
        }
    }
    else {
        return allData;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBWSxPQUFPLFdBQU0sb0JBQ3pCLENBQUMsQ0FENEM7QUFDN0MsTUFBWSxLQUFLLFdBQU0sa0JBQWtCLENBQUMsQ0FBQTtBQVEvQixlQUFPLEdBQUcsQ0FBQyxVQUFtQjtJQUVyQywwQkFBMEI7SUFDMUIsRUFBRSxDQUFBLENBQ0UsT0FBTyxVQUFVLENBQUMsUUFBUSxJQUFJLFNBQVM7V0FDcEMsT0FBTyxVQUFVLENBQUMsZUFBZSxJQUFJLFNBQzVDLENBQUMsQ0FBQSxDQUFDO1FBQ0UsSUFBSSxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDM0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUM7UUFDcEUsVUFBVSxDQUFDLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQztJQUNuRCxDQUFDO0lBQUEsQ0FBQztJQUVGLGtCQUFrQjtJQUNsQixJQUFJLFVBQWlCLENBQUM7SUFDdEIsRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7UUFDZixVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBQyxlQUFlLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBQUEsQ0FBQztJQUVGLGNBQWM7SUFDZCxJQUFJLE9BQU8sQ0FBQztJQUNaLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDaEQsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsZUFBZSxDQUFDLENBQUM7UUFDckQsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQUEsQ0FBQztJQUVGLGlCQUFpQjtJQUNqQixPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEUsRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7UUFDcEIsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZFLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDckIsQ0FBQztJQUNMLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztBQUNMLENBQUMsQ0FBQSJ9