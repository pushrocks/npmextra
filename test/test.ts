import { expect, tap } from '@pushrocks/tapbundle';
import path = require('path');

// module to test
import npmExtra = require('../ts/index');

let testNpmextra: npmExtra.Npmextra;

tap.test('should create a new Npmtextra instance', async () => {
  testNpmextra = new npmExtra.Npmextra('./test/');
  expect(testNpmextra).be.instanceof(npmExtra.Npmextra);
});

tap.test('should state wether a npmextra.json exists', async () => {
  // tslint:disable-next-line:no-unused-expression
  expect(testNpmextra.npmextraJsonExists).be.true;
});

tap.test('should pass through default value, if not overriden by config from file', async () => {
  let testData = testNpmextra.dataFor('testTool', { someKey2: 'someValue2' });
  console.log(testData);
  expect(testData).have.ownProperty('someKey2');
});

tap.test('should read a config file', async () => {
  let testData = testNpmextra.dataFor<any>('testTool', {
    someKey2: 'someValue2'
  });
  expect(testData).have.ownProperty('someKey2');
  expect(testData.testValue).equal(2);
});

tap.start();
