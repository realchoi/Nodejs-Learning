// Node.js的流和管道

var fs = require('fs');

// 创建读取流
var readstream = fs.createReadStream(__dirname + '/05-readme.txt', 'utf8');
// 创建写入流
var writestream = fs.createWriteStream(__dirname + '/07-writestream.txt');

// 设置编码也可以如下
// readstream.setEncoding('utf8');


/*
var data = '';

// data事件：读取流中的数据
readstream.on('data', function (chunk) {
    data += chunk;
    // 将读取的内容写入另一个文件
    // writestream.write(chunk);
})

// end事件：读取数据完成
readstream.on('end', function () {
    console.log(data);
})

// 写入流也可以如下
var writedata = 'This is write stream content.';
writestream.write(writedata);
writestream.end();
writestream.on('finish', function () {
    console.log('write finished.');
})
*/

// 从一个文件读取流，再写入另一个流（也就是复制），也可以用管道（pipe）来完成
readstream.pipe(writestream);