export declare type TKeyValueStore = 'path' | 'gitProject' | 'custom';
/**
 * kvStore is a simple key vlaue store to store data about projects between runs
 */
export declare class KeyValueStore {
    type: TKeyValueStore;
    identity: string;
    filePath: string;
    constructor(typeArg: TKeyValueStore, customStringArg?: string);
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
    private initFilePath();
}
