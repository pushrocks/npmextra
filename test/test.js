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
    it("should read a config file", function () {
        let testData = npmExtra.dataFor({
            toolName: "testTool",
            defaultSettings: { someKey2: "someValue2" },
            cwd: path.join(process.cwd(), "test/")
        });
        testData.should.have.ownProperty("someKey2");
        testData.testValue.should.equal(2);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFzQjtBQUN0Qiw2QkFBOEI7QUFDOUIsa0JBQWdCO0FBRWhCLDBDQUEyQztBQUUzQyxRQUFRLENBQUMsVUFBVSxFQUFDO0lBQ2hCLEVBQUUsQ0FBQywyQkFBMkIsRUFBQztRQUMzQixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQzVCLFFBQVEsRUFBQyxVQUFVO1lBQ25CLGVBQWUsRUFBQyxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUM7WUFDdkMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sQ0FBQztTQUN4QyxDQUFDLENBQUM7UUFDSCxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMsMkJBQTJCLEVBQUM7UUFDM0IsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUM1QixRQUFRLEVBQUMsVUFBVTtZQUNuQixlQUFlLEVBQUMsRUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFDO1lBQ3ZDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBQyxPQUFPLENBQUM7U0FDeEMsQ0FBQyxDQUFDO1FBQ0gsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=