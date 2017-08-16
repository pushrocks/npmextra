import { Task, TaskOnce } from 'taskbuffer';
export declare type TKeyValueStore = 'path' | 'gitProject' | 'custom';
/**
 * kvStore is a simple key vlaue store to store data about projects between runs
 */
export declare class KeyValueStore {
    dataObject: any;
    deletedObject: any;
    initialReadTask: TaskOnce;
    syncTask: Task;
    type: TKeyValueStore;
    identity: string;
    filePath: string;
    /**
     * the constructor of keyvalue store
     * @param typeArg
     * @param customStringArg
     */
    constructor(typeArg: TKeyValueStore, customStringArg: string);
    /**
     * reads all keyValue pairs at once and returns them
     */
    readAll(): Promise<any>;
    /**
     * reads a keyValueFile from disk
     */
    readKey(keyArg: string): Promise<any>;
    /**
     * writes a specific key to the keyValueStore
     */
    writeKey(keyArg: string, valueArg: any): Promise<void>;
    /**
     * writes all keyValue pairs in the object argument
     */
    writeAll(keyValueObject: any): Promise<void>;
    /**
     * wipes a key value store from disk
     */
    wipe(): Promise<void>;
    /**
     * updates a value
     */
    update(keyObject: any): Promise<void>;
    /**
     * computes the identity
     */
    private initFilePath();
}
