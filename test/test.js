"use strict";
require("typings-test");
const path = require("path");
require("should");
const npmExtra = require("../dist/index");
describe("npmextra", function () {
    it("should read a config file", function () {
        let testData = npmExtra.dataFor({
            toolName: "testTool",
            defaultSettings: { someKey2: "someValue2" },
            cwd: path.join(process.cwd(), "test/")
        });
        testData.should.have.ownProperty("someKey2");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FBYyxDQUFDLENBQUE7QUFDdEIsTUFBTyxJQUFJLFdBQVcsTUFBTSxDQUFDLENBQUM7QUFDOUIsUUFBTyxRQUFRLENBQUMsQ0FBQTtBQUVoQixNQUFPLFFBQVEsV0FBVyxlQUFlLENBQUMsQ0FBQztBQUUzQyxRQUFRLENBQUMsVUFBVSxFQUFDO0lBQ2hCLEVBQUUsQ0FBQywyQkFBMkIsRUFBQztRQUMzQixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQzVCLFFBQVEsRUFBQyxVQUFVO1lBQ25CLGVBQWUsRUFBQyxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUM7WUFDdkMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sQ0FBQztTQUN4QyxDQUFDLENBQUM7UUFDSCxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9