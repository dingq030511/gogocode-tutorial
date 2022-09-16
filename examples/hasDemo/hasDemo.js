import $ from 'gogocode'
import {join} from 'path'
import {fileURLToPath} from 'url'
const ast = $.loadFile(join(fileURLToPath(import.meta.url), '../source.js'));
const statement = `import {sum} from './utils.js'`
if(!ast.has(statement)){
  ast.before(statement)
}

const code = ast.generate();
console.log(code);
