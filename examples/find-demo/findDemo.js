import $ from 'gogocode'
import {join} from 'path'
import {fileURLToPath} from 'url'
const ast = $.loadFile(join(fileURLToPath(import.meta.url), '../source.js'));
const test1 = ast.find('function log() {}');
const code = test1.generate();
console.log(code);


// const aDef = ast.find('const a = 123')
const aDef = ast.find('const a=$_$')

console.log(aDef.match);

