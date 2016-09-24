export declare type keyValueStoreTypes = 'path' | 'gitProject' | 'customString';
export declare class KeyValueStore {
    type: string;
    identity: string;
    filePath: string;
    constructor(typeArg: keyValueStoreTypes, identityStringArg?: string);
    /**
     * reads a keyValueFile from disk
     */
    read(): void;
    /**
     * writes a key value file to disk
     */
    write(): void;
    /**
     * wipes a key value store from disk
     */
    wipe(): void;
    /**
     * updates a value
     */
    update(): void;
    /**
     * computes the identity
     */
    private initIdentity(identityStringArg);
    /**
     * computes the filePath
     */
    private initFilePath();
}
