import "typings-test";
import path = require("path");
import "should";

import npmExtra = require("../dist/index");

describe("npmextra",function(){
    it("should read a config file",function(){
        let testData = npmExtra.dataFor({
            toolName:"testTool",
            defaultSettings:{someKey2:"someValue2"},
            cwd: path.join(process.cwd(),"test/")
        });
        testData.should.have.ownProperty("someKey2");
    });
    it("should read a config file",function(){
        let testData = npmExtra.dataFor({
            toolName:"testTool",
            defaultSettings:{someKey2:"someValue2"},
            cwd: path.join(process.cwd(),"test/")
        });
        testData.should.have.ownProperty("someKey2");
        testData.testValue.should.equal(2);
    });
});