// Node.js的路由

var http = require('http');
var fs = require('fs');

var startServer = function () {
    var onRequest = function (request, response) {
        // 获取请求的地址
        var url = request.url;
        console.log('Request received: ' + url);
        if (url === '/' || url === '/home') {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream(__dirname + '/08-index.html', 'utf8').pipe(response);
        }
        else if (url === '/api/v1/record') {
            var jsonObj = {
                name: 'Eric',
                job: 'Programmer',
                age: 18
            };
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(jsonObj));
        }
        else {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            fs.createReadStream(__dirname + '/09-404.html', 'utf8').pipe(response);
        }
    }

    var server = http.createServer(onRequest);
    server.listen(3000);
    console.log('Server started at port 3000.');
}

// 导出为一个模块，使代码更紧凑
module.exports = {
    startServer: startServer
}
