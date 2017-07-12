import { expect, tap } from 'tapbundle'

import * as npmextra from '../dist/index'

let myKeyValueStore: npmextra.KeyValueStore

tap.test('should create a keyValueStore', async () => {
  myKeyValueStore = new npmextra.KeyValueStore('custom','test')
  expect(myKeyValueStore).to.be.instanceof(npmextra.KeyValueStore)
})

tap.test('expect result to be empty', async () => {
  let result = myKeyValueStore.readAll()
  // tslint:disable-next-line:no-unused-expression
  expect(result).to.be.empty
})

tap.test('expect to add an object to the kv Store', async () => {
  await myKeyValueStore.write({
    myKey: 'myValue'
  })
  await expect(myKeyValueStore.read('myKey')).to.eventually.equal('myValue')
})

tap.start()
