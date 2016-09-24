export declare type keyValueStoreTypes = 'path' | 'gitProject';
export declare class KeyValueStore {
    constructor(optionsArg: {
        type: keyValueStoreTypes;
    });
    /**
 * reads a keyValueFile from disk
 */
    kvRead(): void;
    /**
     * writes a key value file to disk
     */
    kvWrite(): void;
    /**
     * wipes a key value store from disk
     */
    kevWipe(): void;
}
