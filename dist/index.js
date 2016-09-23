"use strict";
const plugins = require("./npmextra.plugins");
const paths = require("./npmextra.paths");
/**
 * gets lookupPath
 */
let getLookupPath = (cwdArg) => {
    if (cwdArg) {
        let cwdResolved = plugins.path.resolve(cwdArg);
        return plugins.path.join(cwdResolved, 'npmextra.json');
    }
    else {
        return paths.configFile;
    }
    ;
};
/**
 * gets you the configuration data for
 * @executes SYNC
 */
exports.dataFor = (optionsArg) => {
    // handle default settings
    if (typeof optionsArg.toolName !== undefined
        && typeof optionsArg.defaultSettings !== undefined) {
        let newDefaultOptions = {};
        newDefaultOptions[optionsArg.toolName] = optionsArg.defaultSettings;
        optionsArg.defaultSettings = newDefaultOptions;
    }
    ;
    // set lookup path
    let lookupPath = getLookupPath(optionsArg.cwd);
    // get allData
    let allData;
    if (exports.configFilePresent(lookupPath)) {
        allData = plugins.smartfile.fs.toObjectSync(lookupPath);
    }
    else {
        plugins.beautylog.warn(`${lookupPath} is missing!`);
        allData = {};
    }
    ;
    // assign all data
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
exports.dataForExists = (optionsArg) => {
    // set lookup path
    let lookupPath = getLookupPath(optionsArg.cwd);
    if (exports.configFilePresent(optionsArg.cwd)) {
        let allData = plugins.smartfile.fs.toObjectSync(lookupPath);
        if (allData[optionsArg.toolName]) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};
/**
 * tells you if a configfile is present
 */
exports.configFilePresent = (cwdArg) => {
    let lookupPath = getLookupPath(cwdArg);
    return plugins.smartfile.fs.fileExistsSync(lookupPath);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOENBQTZDO0FBQzdDLDBDQUF5QztBQVd6Qzs7R0FFRztBQUNILElBQUksYUFBYSxHQUFHLENBQUMsTUFBYztJQUMvQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQTtJQUMzQixDQUFDO0lBQUEsQ0FBQztBQUNOLENBQUMsQ0FBQTtBQUVEOzs7R0FHRztBQUNRLFFBQUEsT0FBTyxHQUFHLENBQVcsVUFBb0I7SUFFaEQsMEJBQTBCO0lBQzFCLEVBQUUsQ0FBQyxDQUNDLE9BQU8sVUFBVSxDQUFDLFFBQVEsS0FBSyxTQUFTO1dBQ3JDLE9BQU8sVUFBVSxDQUFDLGVBQWUsS0FBSyxTQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNDLElBQUksaUJBQWlCLEdBQUcsRUFBRSxDQUFBO1FBQzFCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFBO1FBQ25FLFVBQVUsQ0FBQyxlQUFlLEdBQUcsaUJBQWlCLENBQUE7SUFDbEQsQ0FBQztJQUFBLENBQUM7SUFFRixrQkFBa0I7SUFDbEIsSUFBSSxVQUFVLEdBQVcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUV0RCxjQUFjO0lBQ2QsSUFBSSxPQUFPLENBQUE7SUFDWCxFQUFFLENBQUMsQ0FBQyx5QkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsY0FBYyxDQUFDLENBQUE7UUFDbkQsT0FBTyxHQUFHLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBQUEsQ0FBQztJQUVGLGtCQUFrQjtJQUNsQixPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDdkUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdkMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1lBQ3RFLE1BQU0sQ0FBQyxTQUFTLENBQUE7UUFDcEIsQ0FBQztJQUNMLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLE1BQU0sQ0FBQyxPQUFPLENBQUE7SUFDbEIsQ0FBQztBQUNMLENBQUMsQ0FBQTtBQUVVLFFBQUEsYUFBYSxHQUFHLENBQUMsVUFBb0I7SUFDNUMsa0JBQWtCO0lBQ2xCLElBQUksVUFBVSxHQUFXLGFBQWEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDdEQsRUFBRSxDQUFDLENBQUMseUJBQWlCLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDM0QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQTtRQUNmLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFDaEIsQ0FBQztJQUNMLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLE1BQU0sQ0FBQyxLQUFLLENBQUE7SUFDaEIsQ0FBQztBQUNMLENBQUMsQ0FBQTtBQUVEOztHQUVHO0FBQ1EsUUFBQSxpQkFBaUIsR0FBRyxDQUFDLE1BQWM7SUFDMUMsSUFBSSxVQUFVLEdBQVcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzlDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDMUQsQ0FBQyxDQUFBIn0=