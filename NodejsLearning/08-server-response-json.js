// Node.js的server服务器
// 服务器响应一个json对象给客户端

var http = require('http');

var server = http.createServer(function (request, response) {
    console.log('Request received.');
    response.writeHead(200, { 'Content-Type': 'application/json' });
    var jsonObj = {
        name: 'Eric',
        job: 'Programmer',
        age: 18
    };
    // Json对象的序列化
    response.write(JSON.stringify(jsonObj));
    response.end();
});

server.listen(3000);
console.log('Server started at port 3000');