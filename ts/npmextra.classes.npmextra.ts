import * as plugins from './npmextra.plugins'
import * as paths from './npmextra.paths'

/**
 * the main interface npmextra functions work with
 */
export interface IDataFor {
    toolName: string
    defaultSettings?
    cwd?: string
}

/**
 * gets lookupPath
 */
let getLookupPath = (cwdArg: string) => {
    if (cwdArg) {
        let cwdResolved = plugins.path.resolve(cwdArg)
        return plugins.path.join(cwdResolved, 'npmextra.json')
    } else {
        return paths.configFile
    };
}

/**
 * gets you the configuration data for
 * @executes SYNC
 */
export let dataFor = <IOptions>(optionsArg: IDataFor): IOptions => {

    // make supplied defaultSettings and npmextra.json overlap
    if (
        typeof optionsArg.toolName !== undefined
        && typeof optionsArg.defaultSettings !== undefined
    ) {
        let newDefaultOptions = {}
        newDefaultOptions[optionsArg.toolName] = optionsArg.defaultSettings
        optionsArg.defaultSettings = newDefaultOptions
    };

    // set lookup path
    let lookupPath: string = getLookupPath(optionsArg.cwd)

    // get allData
    let allData
    if (configFilePresent(lookupPath)) {
        allData = plugins.smartfile.fs.toObjectSync(getLookupPath(optionsArg.cwd))
    } else {
        plugins.beautylog.warn(`${lookupPath} is missing!`)
        allData = {}
    };

    // assign all data
    allData = plugins.lodash.merge({}, optionsArg.defaultSettings, allData)
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

export let dataForExists = (optionsArg: IDataFor): boolean => {
    // set lookup path
    let lookupPath: string = getLookupPath(optionsArg.cwd)
    if (configFilePresent(optionsArg.cwd)) {
        let allData = plugins.smartfile.fs.toObjectSync(lookupPath)
        if (allData[optionsArg.toolName]) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

/**
 * tells you if a configfile is present
 */
export let configFilePresent = (cwdArg: string): boolean => {
    let lookupPath: string = getLookupPath(cwdArg)
    return plugins.smartfile.fs.fileExistsSync(lookupPath)
}
