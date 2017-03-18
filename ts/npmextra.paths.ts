import * as plugins from './npmextra.plugins'

// directories
export let cwd = process.cwd()
export let packageDir = plugins.path.join(__dirname,'../')

// ----------------------
// keyValueStore specific
// ----------------------

/**
 * keyValue base path
 */
export let kvBase = '~/.npmextra/kv'

/**
 * the base directory for custom string based key value store
 */
export let kvCustomDir = plugins.path.join(kvBase, 'custom')

/**
 * the subdir for git based keyValue
 */
export let kvGitDir = plugins.path.join(kvBase, 'git')

/**
 * keyValue for path based Key
 */
export let kvPathDir = plugins.path.join(kvBase, 'path')

// files
export let configFile = plugins.path.join(cwd,'npmextra.json')
