"use strict";
const plugins = require("./npmextra.plugins");
const paths = require("./npmextra.paths");
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
    let lookupPath;
    if (optionsArg.cwd) {
        lookupPath = plugins.path.join(optionsArg.cwd, 'npmextra.json');
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
/**
 * tells you if a configfile is present
 */
exports.configFilePresent = (optionsArg) => {
    let lookupPath;
    if (optionsArg.cwd) {
        lookupPath = plugins.path.join(optionsArg.cwd, 'npmextra.json');
    }
    else {
        lookupPath = paths.configFile;
    }
    ;
    return plugins.smartfile.fs.fileExistsSync(lookupPath);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOENBQTZDO0FBQzdDLDBDQUF5QztBQVF6Qzs7O0dBR0c7QUFDUSxRQUFBLE9BQU8sR0FBRyxDQUFXLFVBQW9CO0lBRWhELDBCQUEwQjtJQUMxQixFQUFFLENBQUMsQ0FDQyxPQUFPLFVBQVUsQ0FBQyxRQUFRLEtBQUssU0FBUztXQUNyQyxPQUFPLFVBQVUsQ0FBQyxlQUFlLEtBQUssU0FDN0MsQ0FBQyxDQUFDLENBQUM7UUFDQyxJQUFJLGlCQUFpQixHQUFHLEVBQUUsQ0FBQTtRQUMxQixpQkFBaUIsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQTtRQUNuRSxVQUFVLENBQUMsZUFBZSxHQUFHLGlCQUFpQixDQUFBO0lBQ2xELENBQUM7SUFBQSxDQUFDO0lBRUYsa0JBQWtCO0lBQ2xCLElBQUksVUFBa0IsQ0FBQTtJQUN0QixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQixVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBQyxlQUFlLENBQUMsQ0FBQTtJQUNsRSxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQTtJQUNqQyxDQUFDO0lBQUEsQ0FBQztJQUVGLGNBQWM7SUFDZCxJQUFJLE9BQU8sQ0FBQTtJQUNYLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsY0FBYyxDQUFDLENBQUE7UUFDbkQsT0FBTyxHQUFHLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBQUEsQ0FBQztJQUVGLGtCQUFrQjtJQUNsQixPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUMsT0FBTyxDQUFDLENBQUE7SUFDckUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdkMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1lBQ3RFLE1BQU0sQ0FBQyxTQUFTLENBQUE7UUFDcEIsQ0FBQztJQUNMLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLE1BQU0sQ0FBQyxPQUFPLENBQUE7SUFDbEIsQ0FBQztBQUNMLENBQUMsQ0FBQTtBQUVEOztHQUVHO0FBQ1EsUUFBQSxpQkFBaUIsR0FBRyxDQUFDLFVBQTBCO0lBQ3RELElBQUksVUFBa0IsQ0FBQTtJQUN0QixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQixVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBQyxlQUFlLENBQUMsQ0FBQTtJQUNsRSxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQTtJQUNqQyxDQUFDO0lBQUEsQ0FBQztJQUNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDMUQsQ0FBQyxDQUFBIn0=