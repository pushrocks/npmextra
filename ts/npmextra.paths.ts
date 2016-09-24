import * as plugins from './npmextra.plugins'

// directories
export let cwd = process.cwd()
export let packageDir = plugins.path.join(__dirname,'../')

// keyValueStore specific
export let kvBase = '~/.npmextra/kv'
export let kvCusomDir = plugins.path.join(kvBase, 'custom')
export let kvGitDir = plugins.path.join(kvBase, 'git')
export let kvPathDir = plugins.path.join(kvBase, 'path')

// files
export let configFile = plugins.path.join(cwd,'npmextra.json')
