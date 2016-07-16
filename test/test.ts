import "typings-test";
import path = require("path");
import "should";

import npmExtra = require("../dist/index");

describe("npmextra",function(){
    it("should read a config file",function(){
        let testData = npmExtra.dataFor("testTool",path.join(process.cwd(),"test/"));
        console.log(testData);
    });
});