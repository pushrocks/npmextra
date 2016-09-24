/**
 * Npmextra class allows easy configuration of tools
 */
export declare class Npmextra {
    cwd: string;
    lookupPath: string;
    npmextraJsonExists: boolean;
    npmextraJsonData: boolean;
    /**
     * creates instance of Npmextra
     */
    constructor(cwdArg?: string);
    /**
     * merges the supplied options with the ones from npmextra.json
     */
    dataFor(toolnameArg: string, defaultOptionsArg: any): any;
    /**
     * checks if the JSON exists
     */
    private checkNpmextraJsonExists();
    /**
     * gets lookupPath
     */
    private checkLookupPath();
    /**
     * get npmextraJsonData
     */
    private checkNpmextraJsonData();
}
