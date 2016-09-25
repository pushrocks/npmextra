import * as plugins from './npmextra.plugins'
import * as paths from './npmextra.paths'

/**
 * Npmextra class allows easy configuration of tools
 */
export class Npmextra {
    cwd: string
    lookupPath: string
    npmextraJsonExists: boolean
    npmextraJsonData: any

    /**
     * creates instance of Npmextra
     */
    constructor(cwdArg?: string) {
        if (cwdArg) {
            this.cwd = cwdArg
        } else {
            this.cwd = paths.cwd
        }
        this.checkLookupPath()
        this.checkNpmextraJsonExists()
        this.checkNpmextraJsonData()
    }

    /**
     * merges the supplied options with the ones from npmextra.json
     */
    dataFor<IToolConfig>(toolnameArg: string, defaultOptionsArg: any): IToolConfig {
        let npmextraToolOptions
        if (this.npmextraJsonData[toolnameArg]) {
            npmextraToolOptions = this.npmextraJsonData[toolnameArg]
        } else {
            npmextraToolOptions = {}
        }
        let mergedOptions = plugins.lodash.merge({}, defaultOptionsArg, npmextraToolOptions)
        return mergedOptions
    }

    /**
     * checks if the JSON exists
     */
    private checkNpmextraJsonExists() {
        this.npmextraJsonExists = plugins.smartfile.fs.fileExistsSync(this.lookupPath)
    }

    /**
     * gets lookupPath
     */
    private checkLookupPath() {
        if (this.cwd) {
            this.lookupPath = plugins.path.join(this.cwd, 'npmextra.json')
        } else {
            this.lookupPath = paths.configFile
        };
    }

    /**
     * get npmextraJsonData
     */
    private checkNpmextraJsonData() {
        if (this.npmextraJsonExists) {
            this.npmextraJsonData = plugins.smartfile.fs.toObjectSync(this.lookupPath)
        } else {
            this.npmextraJsonData = {}
        }
    }

}
