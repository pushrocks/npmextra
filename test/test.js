"use strict";
require("typings-test");
const path = require("path");
const should = require("should");
const npmExtra = require("../dist/index");
describe('npmextra', function () {
    it('should state wether a npmextra.json exists', function () {
        should(npmExtra.configFilePresent('./test/')).be.true();
    });
    it('should read a config file', function () {
        let testData = npmExtra.dataFor({
            toolName: 'testTool',
            defaultSettings: { someKey2: 'someValue2' },
            cwd: path.join(process.cwd(), 'test/')
        });
        should(testData).have.ownProperty('someKey2');
    });
    it('should read a config file', function () {
        let testData = npmExtra.dataFor({
            toolName: 'testTool',
            defaultSettings: { someKey2: 'someValue2' },
            cwd: path.join(process.cwd(), 'test/')
        });
        should(testData).have.ownProperty('someKey2');
        should(testData.testValue).equal(2);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQiw2QkFBNkI7QUFDN0IsaUNBQWdDO0FBSWhDLDBDQUEwQztBQUUxQyxRQUFRLENBQUMsVUFBVSxFQUFDO0lBQ2hCLEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRTtRQUM3QyxNQUFNLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQzNELENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLDJCQUEyQixFQUFDO1FBQzNCLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDNUIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsZUFBZSxFQUFFLEVBQUMsUUFBUSxFQUFFLFlBQVksRUFBQztZQUN6QyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUMsT0FBTyxDQUFDO1NBQ3hDLENBQUMsQ0FBQTtRQUNGLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2pELENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLDJCQUEyQixFQUFDO1FBQzNCLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDNUIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsZUFBZSxFQUFFLEVBQUMsUUFBUSxFQUFFLFlBQVksRUFBQztZQUN6QyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUMsT0FBTyxDQUFDO1NBQ3hDLENBQUMsQ0FBQTtRQUNGLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzdDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3ZDLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==