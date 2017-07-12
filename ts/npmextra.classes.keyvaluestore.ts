import * as plugins from './npmextra.plugins'
import * as paths from './npmextra.paths'

import { Task } from 'taskbuffer'

export type TKeyValueStore = 'path' | 'gitProject' | 'custom'

/**
 * kvStore is a simple key vlaue store to store data about projects between runs
 */
export class KeyValueStore {
  dataObject: any
  firstReadDeferred = plugins.smartq.defer()
  syncTask: plugins.taskbuffer.Task
  type: TKeyValueStore // the type of the kvStore
  identity: string // the identity of the kvStore
  filePath: string // the filePath of the kvStore
  constructor (typeArg: TKeyValueStore, customStringArg?: string) {
    // set kvStoreType
    this.type = typeArg
    this.identity = customStringArg
    this.initFilePath()

    // set up the sync Task
    this.syncTask = new Task({
      buffered: true,
      bufferMax: 2,
      execDelay: 500,
      taskFunction: async () => {
        this.dataObject = plugins.smartlodash.merge(
          {},
          plugins.smartfile.fs.toObjectSync(this.filePath,
          this.dataObject
        )
        await plugins.smartfile.memory.toFs(JSON.stringify(this.dataObject), this.filePath)
      },
      name: 'syncTask'
    })
  }

  /**
   * reads all keyValue pairs at once and returns them
   */
  async readAll () {
    this.syncTask.trigger()
    await this.firstReadDeferred.promise
    return this.dataObject
  }

  /**
   * reads a keyValueFile from disk
   */
  async read (keyArg: string) {
    let data = this.readAll()
    return data[keyArg]
  }

  /**
   * writes a key value file to disk
   */
  async write (keyValueObject) {
    plugins.smartlodash.merge(this.dataObject, keyValueObject)
    this.syncTask.trigger()
  }

  /**
   * wipes a key value store from disk
   */
  async wipe () {
    this.dataObject.
  }

  /**
   * updates a value
   */
  async update () {

  }

  /**
   * computes the identity
   */
  private initFilePath () {
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
