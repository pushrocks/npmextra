import * as plugins from './npmextra.plugins';
import * as paths from './npmextra.paths';

import { Task, TaskOnce } from '@pushrocks/taskbuffer';

export type TKeyValueStore = 'path' | 'gitProject' | 'custom';

/**
 * kvStore is a simple key vlaue store to store data about projects between runs
 */
export class KeyValueStore {
  public dataObject: any;
  public deletedObject: any = {};
  public initialReadTask = new TaskOnce({
    taskFunction: async () => {
      this.dataObject = plugins.smartfile.fs.toObjectSync(this.filePath);
    }
  });
  public syncTask = new Task({
    buffered: true,
    bufferMax: 2,
    execDelay: 500,
    taskFunction: async () => {
      this.dataObject = {
        ...plugins.smartfile.fs.toObjectSync(this.filePath),
        ...this.dataObject
      };
      for (const key of Object.keys(this.deletedObject)) {
        delete this.dataObject[key];
      }
      this.deletedObject = {};
      await plugins.smartfile.memory.toFs(JSON.stringify(this.dataObject), this.filePath);
    },
    name: 'syncTask'
  });
  public type: TKeyValueStore; // the type of the kvStore
  public identity: string; // the identity of the kvStore
  public filePath: string; // the filePath of the kvStore

  /**
   * the constructor of keyvalue store
   * @param typeArg
   * @param customStringArg
   */
  constructor(typeArg: TKeyValueStore, customStringArg: string) {
    // set kvStoreType
    this.type = typeArg;
    this.identity = customStringArg;
    this.initFilePath();
  }

  /**
   * reads all keyValue pairs at once and returns them
   */
  public async readAll() {
    await this.initialReadTask.trigger();
    this.syncTask.trigger();
    return this.dataObject;
  }

  /**
   * reads a keyValueFile from disk
   */
  public async readKey(keyArg: string) {
    let data = await this.readAll();
    return data[keyArg];
  }

  /**
   * writes a specific key to the keyValueStore
   */
  async writeKey(keyArg: string, valueArg: any) {
    let writeObject: any = {};
    writeObject[keyArg] = valueArg;
    this.writeAll(writeObject);
  }

  /**
   * writes all keyValue pairs in the object argument
   */
  public async writeAll(keyValueObject) {
    this.dataObject = {...this.dataObject, ...keyValueObject};
    this.syncTask.trigger();
  }

  /**
   * wipes a key value store from disk
   */
  public async wipe() {
    for (let key in this.dataObject) {
      this.deletedObject[key] = this.dataObject[key];
    }
  }

  /**
   * updates a value
   */
  public async update(keyObject) {};

  /**
   * computes the identity
   */
  private initFilePath() {
    // determine the right base directory
    let baseDir: string;
    if (this.type === 'custom') {
      baseDir = paths.kvCustomDir;
    } else if (this.type === 'gitProject') {
      baseDir = paths.kvGitDir;
    } else if (this.type === 'path') {
      baseDir = paths.kvPathDir;
    }
    this.filePath = plugins.path.join(baseDir, this.identity + '.json');
    plugins.smartfile.fs.ensureDirSync(paths.kvCustomDir);
    plugins.smartfile.fs.ensureDirSync(paths.kvGitDir);
    plugins.smartfile.fs.ensureDirSync(paths.kvPathDir);
    plugins.smartfile.fs.ensureFileSync(this.filePath, '{}');
  }
}
