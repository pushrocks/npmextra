import * as plugins from './npmextra.plugins'
import * as paths from './npmextra.paths'

export type TKeyValueStore = 'path' | 'gitProject' | 'custom'

/**
 * kvStore is a simple key vlaue store to store data about projects between runs
 */
export class KeyValueStore {
  type: TKeyValueStore // the type of the kvStore
  identity: string // the identity of the kvStore
  filePath: string // the filePath of the kvStore
  constructor(typeArg: TKeyValueStore, customStringArg?: string) {
    // set kvStoreType
    this.type = typeArg
    this.identity = customStringArg
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
  private initFilePath() {
    // determine the right base directory
    let baseDir: string
    if (this.type === 'custom') {
      baseDir = paths.kvCustomDir
    } else if (this.type === 'gitProject') {
      baseDir = paths.kvGitDir
    } else if (this.type === 'path') {

      baseDir = paths.kvPathDir
    }
    this.filePath = plugins.path.join(baseDir, this.identity + '.json')
    plugins.smartfile.fs.ensureFileSync(this.filePath, '{}')
  }
}
