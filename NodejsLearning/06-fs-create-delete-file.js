// Node.js的文件系统-创建删除目录

var fs = require('fs');

// 删除文件
// fs.unlink('05-writeme.txt', function () {
//     console.log('delete file finished.');
// })

// 创建目录
// fs.mkdirSync('stuff');

// 删除目录
// fs.rmdirSync('stuff');

// 读取readme.txt的文件内容，拷贝到stuff文件夹下的writeme.txt文件中
fs.mkdir('06-stuff', function () {
    fs.readFile('05-readme.txt', function (err, data) {
        console.log('read file finished.');
        fs.writeFile('./06-stuff/writeme.txt', data, function () {
            console.log('write file finished.');
        });
    });
});
