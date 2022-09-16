import $ from 'gogocode'
import {join} from 'path'
import {fileURLToPath} from 'url'
const ast = $.loadFile(join(fileURLToPath(import.meta.url), '../source.js'));
const test1 = ast.find('function log(a) {}');
const code = test1.generate();
console.log(code);


// const aDef = ast.find('const a = 123')
const aDef = ast.find('const a=$_$0')

console.log(aDef.match);
const fns = ast.find(`function $_$0(){}`);
const names = [];
fns.each(fnNode=>names.push(fnNode.match[0][0].value))
console.log(names);

const sumFn = ast.find(`sum($_$0, $_$1)`);
console.log(sumFn);

const logs1 = ast.find(`console.log()`)
const logs2 = ast.find(`console.log($_$0)`)
const logs3 = ast.find(`console.log($_$0, $_$1)`)
const logs4 = ast.find(`console.log($_$0, $_$1, $_$2)`)

// 通配符匹配，写的越多，查询匹配限制越大
console.log(logs1);
console.log(logs2);
console.log(logs3);
console.log(logs4);

const logs5 = ast.find(`console.log($$$0)`)

console.log(logs5);
