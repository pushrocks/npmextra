import 'typings-test'
import path = require('path')
import * as should from 'should'

import npmExtra = require('../dist/index')

let testNpmextra: npmExtra.Npmextra

describe('npmextra', function () {
  it('should create a new Npmtextra instance', function () {
    testNpmextra = new npmExtra.Npmextra('./test/')
    should(testNpmextra).be.instanceof(npmExtra.Npmextra)
  })
  it('should state wether a npmextra.json exists', function () {
    should(testNpmextra.npmextraJsonExists).be.true()
  })
  it('should pass through default value, if not overriden by config from file', function () {
    let testData = testNpmextra.dataFor('testTool', { someKey2: 'someValue2' })
    console.log(testData)
    should(testData).have.ownProperty('someKey2')
  })
  it('should read a config file', function () {
    let testData = testNpmextra.dataFor<any>(
      'testTool',
      {
        someKey2: 'someValue2'
      }
    )
    should(testData).have.ownProperty('someKey2')
    should(testData.testValue).equal(2)
  })
})
