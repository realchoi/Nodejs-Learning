// Node.js的文件系统-读写

// 导入文件系统核心库
var fs = require('fs');

/*
// 读取文件的内容（同步的）
var readme = fs.readFileSync('05-readme.txt', 'utf8');

console.log(readme);

// 写文件（同步的）
fs.writeFileSync('05-writeme.txt', readme);
*/

// 异步读写文件（异步读写文件都有一个回调函数）
fs.readFile('05-readme.txt', function (err, data) {
    console.log('Read finished: ' + data);
    fs.writeFile('05-writeme.txt', data, function (err) {
        console.log('Write finished.');
    });
});