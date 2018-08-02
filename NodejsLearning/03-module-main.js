// Node.js的模块
// 此处调用定义的模块

// 导入模块
var stuff = require('./03-module-stuff');
// 也可以直接导入某个具体的定义
var pi = require('./03-module-stuff').pi;

console.log(stuff.counter(['nodejs', 'react', 'vue']));
console.log(stuff.adder(1, 2));
console.log("The value of PI is " + pi);