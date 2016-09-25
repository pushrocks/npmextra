import * as plugins from './npmextra.plugins'
import * as paths from './npmextra.paths'

export type keyValueStoreTypes = 'path' | 'gitProject' | 'customString'


export class KeyValueStore {
    type: string // the type of the kvStore
    identity: string // the identity of the kvStore
    filePath: string // the filePath of the kvStore
    constructor(typeArg: keyValueStoreTypes, identityStringArg?: string) {
        // set kvStoreType
        this.type = typeArg
        this.initIdentity(identityStringArg)
        this.initFilePath()
    }

    /**
     * reads a keyValueFile from disk
     */
    read() {

    }

    /**
     * writes a key value file to disk
     */
    write() {

    }

    /**
     * wipes a key value store from disk
     */
    wipe() {

    }

    /**
     * updates a value
     */
    update() {

    }

    /**
     * computes the identity
     */
    private initIdentity(identityStringArg: string) {
        
    }

    /**
     * computes the filePath 
     */
    private initFilePath() {
        let baseDir: string
        if (this.type === 'customString') {
            baseDir = paths.kvCusomDir
        } else if (this.type === 'gitProject') {
            baseDir = paths.kvGitDir
        } else if (this.type === 'path') {
            baseDir = paths.kvPathDir
        }
        this.filePath = plugins.path.join(baseDir, this.identity + '.json')
        plugins.smartfile.fs.ensureFileSync(this.filePath,'{}')
    }
}
