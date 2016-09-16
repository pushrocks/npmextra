import * as plugins from './npmextra.plugins'

// directories
export let cwd = process.cwd()
export let packageDir = plugins.path.join(__dirname,'../')

// files
export let configFile = plugins.path.join(cwd,'npmextra.json')
