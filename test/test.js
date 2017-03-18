"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3QkFBcUI7QUFFckIsaUNBQWdDO0FBRWhDLDBDQUEwQztBQUUxQyxJQUFJLFlBQStCLENBQUE7QUFFbkMsUUFBUSxDQUFDLFVBQVUsRUFBRTtJQUNuQixFQUFFLENBQUMsd0NBQXdDLEVBQUU7UUFDM0MsWUFBWSxHQUFHLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUMvQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDdkQsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsNENBQTRDLEVBQUU7UUFDL0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNuRCxDQUFDLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyx5RUFBeUUsRUFBRTtRQUM1RSxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFBO1FBQzNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDL0MsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsMkJBQTJCLEVBQUU7UUFDOUIsSUFBSSxRQUFRLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FDakMsVUFBVSxFQUNWO1lBQ0UsUUFBUSxFQUFFLFlBQVk7U0FDdkIsQ0FDRixDQUFBO1FBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDN0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDckMsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSJ9