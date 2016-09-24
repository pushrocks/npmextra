"use strict";
const plugins = require("./npmextra.plugins");
const paths = require("./npmextra.paths");
/**
 * Npmextra class allows easy configuration of tools
 */
class Npmextra {
    /**
     * creates instance of Npmextra
     */
    constructor(cwdArg) {
        if (cwdArg) {
            this.cwd = cwdArg;
        }
        else {
            this.cwd = paths.cwd;
        }
        this.checkLookupPath();
        this.checkNpmextraJsonExists();
        this.checkNpmextraJsonData();
    }
    /**
     * merges the supplied options with the ones from npmextra.json
     */
    dataFor(toolnameArg, defaultOptionsArg) {
        let npmextraToolOptions;
        if (this.npmextraJsonData[toolnameArg]) {
            npmextraToolOptions = this.npmextraJsonData[toolnameArg];
        }
        else {
            npmextraToolOptions = {};
        }
        let mergedOptions = plugins.lodash.merge({}, defaultOptionsArg, npmextraToolOptions);
        return mergedOptions;
    }
    /**
     * checks if the JSON exists
     */
    checkNpmextraJsonExists() {
        this.npmextraJsonExists = plugins.smartfile.fs.fileExistsSync(this.lookupPath);
    }
    /**
     * gets lookupPath
     */
    checkLookupPath() {
        if (this.cwd) {
            this.lookupPath = plugins.path.join(this.cwd, 'npmextra.json');
        }
        else {
            this.lookupPath = paths.configFile;
        }
        ;
    }
    /**
     * get npmextraJsonData
     */
    checkNpmextraJsonData() {
        if (this.npmextraJsonExists) {
            this.npmextraJsonData = plugins.smartfile.fs.toObjectSync(this.lookupPath);
        }
    }
}
exports.Npmextra = Npmextra;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtZXh0cmEuY2xhc3Nlcy5ucG1leHRyYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL25wbWV4dHJhLmNsYXNzZXMubnBtZXh0cmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE2QztBQUM3QywwQ0FBeUM7QUFFekM7O0dBRUc7QUFDSDtJQU1JOztPQUVHO0lBQ0gsWUFBWSxNQUFlO1FBQ3ZCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDVCxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQTtRQUNyQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUE7UUFDeEIsQ0FBQztRQUNELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtRQUN0QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQTtRQUM5QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQTtJQUNoQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxPQUFPLENBQUMsV0FBbUIsRUFBRSxpQkFBc0I7UUFDL0MsSUFBSSxtQkFBbUIsQ0FBQTtRQUN2QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUM1RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixtQkFBbUIsR0FBRyxFQUFFLENBQUE7UUFDNUIsQ0FBQztRQUNELElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFBO1FBQ3BGLE1BQU0sQ0FBQyxhQUFhLENBQUE7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssdUJBQXVCO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2xGLENBQUM7SUFFRDs7T0FFRztJQUNLLGVBQWU7UUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLENBQUE7UUFDbEUsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFBO1FBQ3RDLENBQUM7UUFBQSxDQUFDO0lBQ04sQ0FBQztJQUVEOztPQUVHO0lBQ0sscUJBQXFCO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDOUUsQ0FBQztJQUNMLENBQUM7Q0FFSjtBQTdERCw0QkE2REMifQ==