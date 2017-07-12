"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./npmextra.plugins");
// directories
exports.cwd = process.cwd();
exports.packageDir = plugins.path.join(__dirname, '../');
// ----------------------
// keyValueStore specific
// ----------------------
exports.home = plugins.smartpath.get.home();
/**
 * keyValue base path
 */
exports.kvBase = plugins.path.join(exports.home, '.npmextra/kv');
/**
 * the base directory for custom string based key value store
 */
exports.kvCustomDir = plugins.path.join(exports.kvBase, 'custom');
/**
 * the subdir for git based keyValue
 */
exports.kvGitDir = plugins.path.join(exports.kvBase, 'git');
/**
 * keyValue for path based keyValue store
 */
exports.kvPathDir = plugins.path.join(exports.kvBase, 'path');
// files
exports.configFile = plugins.path.join(exports.cwd, 'npmextra.json');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtZXh0cmEucGF0aHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9ucG1leHRyYS5wYXRocy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUU3QyxjQUFjO0FBQ0gsUUFBQSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFBO0FBQ25CLFFBQUEsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxLQUFLLENBQUMsQ0FBQTtBQUUxRCx5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUVkLFFBQUEsSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFBO0FBRTlDOztHQUVHO0FBQ1EsUUFBQSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBSSxFQUFDLGNBQWMsQ0FBQyxDQUFBO0FBRzFEOztHQUVHO0FBQ1EsUUFBQSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBTSxFQUFFLFFBQVEsQ0FBQyxDQUFBO0FBRTVEOztHQUVHO0FBQ1EsUUFBQSxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBTSxFQUFFLEtBQUssQ0FBQyxDQUFBO0FBRXREOztHQUVHO0FBQ1EsUUFBQSxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBTSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0FBRXhELFFBQVE7QUFDRyxRQUFBLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFHLEVBQUMsZUFBZSxDQUFDLENBQUEifQ==