"use strict";
require("typings-test");
const path = require("path");
require("should");
const npmExtra = require("../dist/index");
describe("npmextra", function () {
    it("should read a config file", function () {
        let testData = npmExtra.dataFor("testTool", path.join(process.cwd(), "test/"));
        console.log(testData);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FBYyxDQUFDLENBQUE7QUFDdEIsTUFBTyxJQUFJLFdBQVcsTUFBTSxDQUFDLENBQUM7QUFDOUIsUUFBTyxRQUFRLENBQUMsQ0FBQTtBQUVoQixNQUFPLFFBQVEsV0FBVyxlQUFlLENBQUMsQ0FBQztBQUUzQyxRQUFRLENBQUMsVUFBVSxFQUFDO0lBQ2hCLEVBQUUsQ0FBQywyQkFBMkIsRUFBQztRQUMzQixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzdFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9