"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./npmextra.plugins");
const paths = require("./npmextra.paths");
const taskbuffer_1 = require("taskbuffer");
/**
 * kvStore is a simple key vlaue store to store data about projects between runs
 */
class KeyValueStore {
    /**
     * the constructor of keyvalue store
     * @param typeArg
     * @param customStringArg
     */
    constructor(typeArg, customStringArg) {
        this.deletedObject = {};
        this.initialReadTask = new taskbuffer_1.TaskOnce({
            taskFunction: () => __awaiter(this, void 0, void 0, function* () {
                this.dataObject = plugins.smartfile.fs.toObjectSync(this.filePath);
            })
        });
        this.syncTask = new taskbuffer_1.Task({
            buffered: true,
            bufferMax: 2,
            execDelay: 500,
            taskFunction: () => __awaiter(this, void 0, void 0, function* () {
                this.dataObject = plugins.smartlodash.merge({}, plugins.smartfile.fs.toObjectSync(this.filePath), this.dataObject);
                for (let key in this.deletedObject) {
                    delete this.dataObject[key];
                }
                this.deletedObject = {};
                yield plugins.smartfile.memory.toFs(JSON.stringify(this.dataObject), this.filePath);
            }),
            name: 'syncTask'
        });
        // set kvStoreType
        this.type = typeArg;
        this.identity = customStringArg;
        this.initFilePath();
    }
    /**
     * reads all keyValue pairs at once and returns them
     */
    readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialReadTask.trigger();
            this.syncTask.trigger();
            return this.dataObject;
        });
    }
    /**
     * reads a keyValueFile from disk
     */
    read(keyArg) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield this.readAll();
            return data[keyArg];
        });
    }
    /**
     * writes a key value file to disk
     */
    write(keyValueObject) {
        return __awaiter(this, void 0, void 0, function* () {
            plugins.smartlodash.merge(this.dataObject, keyValueObject);
            this.syncTask.trigger();
        });
    }
    /**
     * wipes a key value store from disk
     */
    wipe() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let key in this.dataObject) {
                this.deletedObject[key] = this.dataObject[key];
            }
        });
    }
    /**
     * updates a value
     */
    update(keyObject) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    /**
     * computes the identity
     */
    initFilePath() {
        // determine the right base directory
        let baseDir;
        if (this.type === 'custom') {
            baseDir = paths.kvCustomDir;
        }
        else if (this.type === 'gitProject') {
            baseDir = paths.kvGitDir;
        }
        else if (this.type === 'path') {
            baseDir = paths.kvPathDir;
        }
        this.filePath = plugins.path.join(baseDir, this.identity + '.json');
        plugins.smartfile.fs.ensureDirSync(paths.kvCustomDir);
        plugins.smartfile.fs.ensureDirSync(paths.kvGitDir);
        plugins.smartfile.fs.ensureDirSync(paths.kvPathDir);
        plugins.smartfile.fs.ensureFileSync(this.filePath, '{}');
    }
}
exports.KeyValueStore = KeyValueStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtZXh0cmEuY2xhc3Nlcy5rZXl2YWx1ZXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvbnBtZXh0cmEuY2xhc3Nlcy5rZXl2YWx1ZXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw4Q0FBNkM7QUFDN0MsMENBQXlDO0FBRXpDLDJDQUEyQztBQUkzQzs7R0FFRztBQUNIO0lBaUNFOzs7O09BSUc7SUFDSCxZQUFZLE9BQXVCLEVBQUUsZUFBdUI7UUFwQzVELGtCQUFhLEdBQVEsRUFBRSxDQUFBO1FBQ3ZCLG9CQUFlLEdBQUcsSUFBSSxxQkFBUSxDQUFDO1lBQzdCLFlBQVksRUFBRTtnQkFDWixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDcEUsQ0FBQyxDQUFBO1NBQ0YsQ0FBQyxDQUFBO1FBQ0YsYUFBUSxHQUFHLElBQUksaUJBQUksQ0FBQztZQUNsQixRQUFRLEVBQUUsSUFBSTtZQUNkLFNBQVMsRUFBRSxDQUFDO1lBQ1osU0FBUyxFQUFFLEdBQUc7WUFDZCxZQUFZLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FDekMsRUFBRSxFQUNGLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ2hELElBQUksQ0FBQyxVQUFVLENBQ2hCLENBQUE7Z0JBQ0QsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDN0IsQ0FBQztnQkFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQTtnQkFDdkIsTUFBTSxPQUFPLENB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