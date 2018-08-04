// Node.js的server服务器
// 服务器响应一个HTML页面

var http = require('http');
var fs = require('fs');

// 可以把createServer中的回调函数抽出来
var onRequest = function (request, response) {
    console.log('Request received.');
    var readstream = fs.createReadStream(__dirname + '/08-index.html', 'utf8');
    response.writeHead(200, { 'Content-Type': 'text/html' });
    readstream.pipe(response);
};

var server = http.createServer(onRequest);

server.listen(3000);
console.log('Server started at port 3000');