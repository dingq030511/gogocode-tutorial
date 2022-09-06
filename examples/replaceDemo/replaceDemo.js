import $ from 'gogocode'
import {join} from 'path'
import {fileURLToPath} from 'url'
const ast = $.loadFile(join(fileURLToPath(import.meta.url), '../source.js'));

ast.replace('function log($$$0) { $$$1 }', 'function record($$$0) { $$$1 }');
let code = ast.generate();
console.log(code)

ast.replace(
  '{ text: $_$1, value: $_$2, $$$0 }',
  '{ name: $_$1, id: $_$2, $$$0 }',
);

code = ast.generate();

console.log(code);

ast.replace(`const $_$0 = $_$1`, (match)=>{
  const name = match[0][0].value;
  const value = match[1][0].raw || match[1][0].value;
  if(name.includes('_')){
    return `const ${name.toUpperCase()} = ${value}`
  }
  return `const ${name} = ${value}`
})

code = ast.generate();
console.log(code);

const recordLogAst = ast.find(`function record(){}`).find(`console.log($_$0)`)

recordLogAst.replaceBy(`alert(${recordLogAst.match[0][0].value})`);

code = ast.generate();

console.log(code);