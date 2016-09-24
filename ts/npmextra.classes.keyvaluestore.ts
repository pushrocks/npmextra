import * as plugins from './npmextra.plugins'

export type keyValueStoreTypes = 'path' | 'gitProject'


export class KeyValueStore {
    constructor(optionsArg: {
        type: keyValueStoreTypes
    }) {

    }
    /**
 * reads a keyValueFile from disk
 */
    kvRead() {

    }

    /**
     * writes a key value file to disk
     */
    kvWrite() {

    }

    /**
     * wipes a key value store from disk
     */
    kevWipe() {

    }
}
