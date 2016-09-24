"use strict";
const plugins = require("./npmextra.plugins");
const paths = require("./npmextra.paths");
class KeyValueStore {
    constructor(typeArg, identityStringArg) {
        // set kvStoreType
        this.type = typeArg;
        this.initIdentity(identityStringArg);
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
    initIdentity(identityStringArg) {
    }
    /**
     * computes the filePath
     */
    initFilePath() {
        let baseDir;
        if (this.type === 'customString') {
            baseDir = paths.kvCusomDir;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtZXh0cmEuY2xhc3Nlcy5rZXl2YWx1ZXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvbnBtZXh0cmEuY2xhc3Nlcy5rZXl2YWx1ZXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBNkM7QUFDN0MsMENBQXlDO0FBS3pDO0lBSUksWUFBWSxPQUEyQixFQUFFLGlCQUEwQjtRQUMvRCxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUE7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJO0lBRUosQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSztJQUVMLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUk7SUFFSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO0lBRU4sQ0FBQztJQUVEOztPQUVHO0lBQ0ssWUFBWSxDQUFDLGlCQUF5QjtJQUU5QyxDQUFDO0lBRUQ7O09BRUc7SUFDSyxZQUFZO1FBQ2hCLElBQUksT0FBZSxDQUFBO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssY0FBYyxDQUFDLENBQUMsQ0FBQztZQUMvQixPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQTtRQUM5QixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNwQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQTtRQUM1QixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM5QixPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQTtRQUM3QixDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQTtRQUNuRSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0NBQ0o7QUE3REQsc0NBNkRDIn0=