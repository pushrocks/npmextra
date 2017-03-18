"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./npmextra.plugins");
const paths = require("./npmextra.paths");
class KeyValueStore {
    constructor(typeArg, customStringArg) {
        // set kvStoreType
        this.type = typeArg;
        this.identity = customStringArg;
        this.initIdentity(customStringArg);
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
    initIdentity(customStringArg) {
        let baseDir;
        if (this.type === 'custom') {
            this.identity = customStringArg;
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
    /**
     * computes the filePath
     */
    initFilePath() {
    }
}
exports.KeyValueStore = KeyValueStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtZXh0cmEuY2xhc3Nlcy5rZXl2YWx1ZXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvbnBtZXh0cmEuY2xhc3Nlcy5rZXl2YWx1ZXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLDBDQUF5QztBQUl6QztJQUlFLFlBQVksT0FBdUIsRUFBRSxlQUF3QjtRQUMzRCxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUE7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUE7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJO0lBRUosQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSztJQUVMLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUk7SUFFSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO0lBRU4sQ0FBQztJQUVEOztPQUVHO0lBQ0ssWUFBWSxDQUFDLGVBQXVCO1FBQzFDLElBQUksT0FBZSxDQUFBO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQTtZQUMvQixPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQTtRQUM3QixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN0QyxPQUFPLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQTtRQUMxQixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztZQUVoQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQTtRQUMzQixDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQTtRQUNuRSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxZQUFZO0lBRXBCLENBQUM7Q0FDRjtBQS9ERCxzQ0ErREMifQ==