"use strict";
const plugins = require('./npmextra.plugins');
const paths = require('./npmextra.paths');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBWSxPQUFPLFdBQU0sb0JBQ3pCLENBQUMsQ0FENEM7QUFDN0MsTUFBWSxLQUFLLFdBQU0sa0JBRXZCLENBQUMsQ0FGd0M7QUFRekM7OztHQUdHO0FBQ1EsZUFBTyxHQUFHLENBQVcsVUFBb0I7SUFFaEQsMEJBQTBCO0lBQzFCLEVBQUUsQ0FBQyxDQUNDLE9BQU8sVUFBVSxDQUFDLFFBQVEsS0FBSyxTQUFTO1dBQ3JDLE9BQU8sVUFBVSxDQUFDLGVBQWUsS0FBSyxTQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNDLElBQUksaUJBQWlCLEdBQUcsRUFBRSxDQUFBO1FBQzFCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFBO1FBQ25FLFVBQVUsQ0FBQyxlQUFlLEdBQUcsaUJBQWlCLENBQUE7SUFDbEQsQ0FBQztJQUFBLENBQUM7SUFFRixrQkFBa0I7SUFDbEIsSUFBSSxVQUFrQixDQUFBO0lBQ3RCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQ2xFLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFBO0lBQ2pDLENBQUM7SUFBQSxDQUFDO0lBRUYsY0FBYztJQUNkLElBQUksT0FBTyxDQUFBO0lBQ1gsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzNELENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxjQUFjLENBQUMsQ0FBQTtRQUNuRCxPQUFPLEdBQUcsRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUFBQSxDQUFDO0lBRUYsa0JBQWtCO0lBQ2xCLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUMsVUFBVSxDQUFDLGVBQWUsRUFBQyxPQUFPLENBQUMsQ0FBQTtJQUNyRSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN2QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7WUFDdEUsTUFBTSxDQUFDLFNBQVMsQ0FBQTtRQUNwQixDQUFDO0lBQ0wsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osTUFBTSxDQUFDLE9BQU8sQ0FBQTtJQUNsQixDQUFDO0FBQ0wsQ0FBQyxDQUFBO0FBRUQ7O0dBRUc7QUFDUSx5QkFBaUIsR0FBRyxDQUFDLFVBQTBCO0lBQ3RELElBQUksVUFBa0IsQ0FBQTtJQUN0QixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQixVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBQyxlQUFlLENBQUMsQ0FBQTtJQUNsRSxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQTtJQUNqQyxDQUFDO0lBQUEsQ0FBQztJQUNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDMUQsQ0FBQyxDQUFBIn0=