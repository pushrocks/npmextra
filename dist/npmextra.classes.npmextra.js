"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        let mergedOptions = plugins.smartlodash.merge({}, defaultOptionsArg, npmextraToolOptions);
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
        else {
            this.npmextraJsonData = {};
        }
    }
}
exports.Npmextra = Npmextra;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtZXh0cmEuY2xhc3Nlcy5ucG1leHRyYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL25wbWV4dHJhLmNsYXNzZXMubnBtZXh0cmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNkM7QUFDN0MsMENBQXlDO0FBRXpDOztHQUVHO0FBQ0g7SUFNRTs7T0FFRztJQUNILFlBQWEsTUFBZTtRQUMxQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUE7UUFDbkIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFBO1FBQ3RCLENBQUM7UUFDRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDdEIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUE7UUFDOUIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUE7SUFDOUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsT0FBTyxDQUFjLFdBQW1CLEVBQUUsaUJBQXNCO1FBQzlELElBQUksbUJBQW1CLENBQUE7UUFDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFFLFdBQVcsQ0FBRSxDQUFDLENBQUMsQ0FBQztZQUN6QyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUUsV0FBVyxDQUFFLENBQUE7UUFDNUQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sbUJBQW1CLEdBQUcsRUFBRSxDQUFBO1FBQzFCLENBQUM7UUFDRCxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQTtRQUN6RixNQUFNLENBQUMsYUFBYSxDQUFBO0lBQ3RCLENBQUM7SUFFRDs7T0FFRztJQUNLLHVCQUF1QjtRQUM3QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNoRixDQUFDO0lBRUQ7O09BRUc7SUFDSyxlQUFlO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFBO1FBQ2hFLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQTtRQUNwQyxDQUFDO1FBQUEsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNLLHFCQUFxQjtRQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzVFLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUE7UUFDNUIsQ0FBQztJQUNILENBQUM7Q0FFRjtBQS9ERCw0QkErREMifQ==