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
/**
 * tells you if a configfile is present
 */
export declare let configFilePresent: (optionsArg: {
    cwd?: string;
}) => boolean;
