/**
 * the main interface npmextra functions work with
 */
export interface IDataFor {
    toolName: string;
    defaultSettings?: any;
    cwd?: string;
}
/**
 * gets you the configuration data for
 * @executes SYNC
 */
export declare let dataFor: <IOptions>(optionsArg: IDataFor) => IOptions;
export declare let dataForExists: (optionsArg: IDataFor) => boolean;
/**
 * tells you if a configfile is present
 */
export declare let configFilePresent: (cwdArg: string) => boolean;
