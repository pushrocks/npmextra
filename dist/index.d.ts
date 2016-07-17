export interface IDataFor {
    toolName: string;
    defaultSettings?: any;
    cwd?: string;
}
export declare let dataFor: (optionsArg: IDataFor) => any;
