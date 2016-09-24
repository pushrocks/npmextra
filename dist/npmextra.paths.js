"use strict";
const plugins = require("./npmextra.plugins");
// directories
exports.cwd = process.cwd();
exports.packageDir = plugins.path.join(__dirname, '../');
// keyValueStore specific
exports.kvBase = '~/.npmextra/kv';
exports.kvCusomDir = plugins.path.join(exports.kvBase, 'custom');
exports.kvGitDir = plugins.path.join(exports.kvBase, 'git');
exports.kvPathDir = plugins.path.join(exports.kvBase, 'path');
// files
exports.configFile = plugins.path.join(exports.cwd, 'npmextra.json');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtZXh0cmEucGF0aHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9ucG1leHRyYS5wYXRocy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOENBQTZDO0FBRTdDLGNBQWM7QUFDSCxRQUFBLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUE7QUFDbkIsUUFBQSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLEtBQUssQ0FBQyxDQUFBO0FBRTFELHlCQUF5QjtBQUNkLFFBQUEsTUFBTSxHQUFHLGdCQUFnQixDQUFBO0FBQ3pCLFFBQUEsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQU0sRUFBRSxRQUFRLENBQUMsQ0FBQTtBQUNoRCxRQUFBLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFNLEVBQUUsS0FBSyxDQUFDLENBQUE7QUFDM0MsUUFBQSxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBTSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0FBRXhELFFBQVE7QUFDRyxRQUFBLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFHLEVBQUMsZUFBZSxDQUFDLENBQUEifQ==