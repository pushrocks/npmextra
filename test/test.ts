import 'typings-test'
import path = require('path')
import * as should from 'should'



import npmExtra = require('../dist/index')

describe('npmextra',function(){
    it('should state wether a npmextra.json exists', function() {
        should(npmExtra.configFilePresent('./test/')).be.true()
    })
    it('should read a config file',function(){
        let testData = npmExtra.dataFor({
            toolName: 'testTool',
            defaultSettings: {someKey2: 'someValue2'},
            cwd: path.join(process.cwd(),'./test/')
        })
        should(testData).have.ownProperty('someKey2')
    })
    it('should read a config file',function(){
        let testData = npmExtra.dataFor({
            toolName: 'testTool',
            defaultSettings: {someKey2: 'someValue2'},
            cwd: path.join(process.cwd(),'test/')
        })
        should(testData).have.ownProperty('someKey2')
        should(testData.testValue).equal(2)
    })
})
