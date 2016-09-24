"use strict";
require("typings-test");
const should = require("should");
const npmExtra = require("../dist/index");
let testNpmextra;
describe('npmextra', function () {
    it('should create a new Npmtextra instance', function () {
        testNpmextra = new npmExtra.Npmextra('./test/');
        should(testNpmextra).be.instanceof(npmExtra.Npmextra);
    });
    it('should state wether a npmextra.json exists', function () {
        should(testNpmextra.npmextraJsonExists).be.true();
    });
    it('should pass through default value, if not overriden by config from file', function () {
        let testData = testNpmextra.dataFor('testTool', { someKey2: 'someValue2' });
        console.log(testData);
        should(testData).have.ownProperty('someKey2');
    });
    it('should read a config file', function () {
        let testData = testNpmextra.dataFor('testTool', {
            someKey2: 'someValue2'
        });
        should(testData).have.ownProperty('someKey2');
        should(testData.testValue).equal(2);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUVyQixpQ0FBZ0M7QUFFaEMsMENBQTBDO0FBRTFDLElBQUksWUFBK0IsQ0FBQTtBQUVuQyxRQUFRLENBQUMsVUFBVSxFQUFDO0lBQ2hCLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRTtRQUN6QyxZQUFZLEdBQUcsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQy9DLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN6RCxDQUFDLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRTtRQUM3QyxNQUFNLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3JELENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLHlFQUF5RSxFQUFDO1FBQ3pFLElBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUMsUUFBUSxFQUFFLFlBQVksRUFBQyxDQUFDLENBQUE7UUFDekUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNyQixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNqRCxDQUFDLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQywyQkFBMkIsRUFBQztRQUMzQixJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUMvQixVQUFVLEVBQ1Y7WUFDSSxRQUFRLEVBQUUsWUFBWTtTQUN6QixDQUNKLENBQUE7UUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM3QyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN2QyxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=