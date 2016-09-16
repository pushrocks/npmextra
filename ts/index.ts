import * as plugins from './npmextra.plugins'
import * as paths from './npmextra.paths'

export interface IDataFor {
    toolName: string
    defaultSettings?
    cwd?: string
}

/**
 * gets you the configuration data for
 * @executes SYNC
 */
export let dataFor = <IOptions>(optionsArg: IDataFor): IOptions => {

    // handle default settings
    if (
        typeof optionsArg.toolName !== undefined
        && typeof optionsArg.defaultSettings !== undefined
    ) {
        let newDefaultOptions = {}
        newDefaultOptions[optionsArg.toolName] = optionsArg.defaultSettings
        optionsArg.defaultSettings = newDefaultOptions
    };

    // set lookup path
    let lookupPath: string
    if (optionsArg.cwd) {
        lookupPath = plugins.path.join(optionsArg.cwd,'npmextra.json')
    } else {
        lookupPath = paths.configFile
    };

    // get allData
    let allData
    if (plugins.smartfile.fs.fileExistsSync(lookupPath)) {
        allData = plugins.smartfile.fs.toObjectSync(lookupPath)
    } else {
        plugins.beautylog.warn(`${lookupPath} is missing!`)
        allData = {}
    };

    // assign all data
    allData = plugins.lodash.merge({},optionsArg.defaultSettings,allData)
    if (optionsArg.toolName) {
        if (allData[optionsArg.toolName]) {
            return allData[optionsArg.toolName]
        } else {
            plugins.beautylog.error(`There is no data for ${optionsArg.toolName}`)
            return undefined
        }
    } else {
        return allData
    }
}

/**
 * tells you if a configfile is present
 */
export let configFilePresent = (optionsArg: {cwd?: string}): boolean => {
    let lookupPath: string
    if (optionsArg.cwd) {
        lookupPath = plugins.path.join(optionsArg.cwd,'npmextra.json')
    } else {
        lookupPath = paths.configFile
    };
    return plugins.smartfile.fs.fileExistsSync(lookupPath)
}
