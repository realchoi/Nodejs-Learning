// Node.js的服务器

// 导入http模块
var http = require('http');

// 创建服务器
var server = http.createServer((request, response) => {
    console.log('Request received.');
    // 服务器进行响应
    // 指定响应的状态，和响应的内容的格式
    response.writeHead(200, { 'ContentType': 'text/plain' });
    // 响应内容
    response.write('This is response content from server.');
    // 响应结束
    response.end();
});

// 监听端口号
server.listen(3000, '127.0.0.1');
console.log('Server started on localhost port 3000.');