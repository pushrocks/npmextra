"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./npmextra.plugins");
const paths = require("./npmextra.paths");
/**
 * kvStore is a simple key vlaue store to store data about projects between runs
 */
class KeyValueStore {
    constructor(typeArg, customStringArg) {
        // set kvStoreType
        this.type = typeArg;
        this.identity = customStringArg;
        this.initFilePath();
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
        plugins.smartfile.fs.ensureFileSync(this.filePath, '{}');
    }
}
exports.KeyValueStore = KeyValueStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtZXh0cmEuY2xhc3Nlcy5rZXl2YWx1ZXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvbnBtZXh0cmEuY2xhc3Nlcy5rZXl2YWx1ZXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLDBDQUF5QztBQUl6Qzs7R0FFRztBQUNIO0lBSUUsWUFBWSxPQUF1QixFQUFFLGVBQXdCO1FBQzNELGtCQUFrQjtRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQTtRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQTtRQUMvQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSTtJQUVKLENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUs7SUFFTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJO0lBRUosQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtJQUVOLENBQUM7SUFFRDs7T0FFRztJQUNLLFlBQVk7UUFDbEIscUNBQXFDO1FBQ3JDLElBQUksT0FBZSxDQUFBO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMzQixPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQTtRQUM3QixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN0QyxPQUFPLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQTtRQUMxQixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztZQUVoQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQTtRQUMzQixDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQTtRQUNuRSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0NBQ0Y7QUF4REQsc0NBd0RDIn0=