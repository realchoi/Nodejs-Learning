// Node.js的路由
// 路由的重构

var http = require('http');
var router = require('./router');

var startServer = function (handle, route) {
    var onRequest = function (request, response) {
        // 获取请求的地址
        var url = request.url;
        console.log('Request received: ' + url);

        route(url, handle, response);
    }

    var server = http.createServer(onRequest);
    server.listen(3000);
    console.log('Server started at port 3000.');
}

// 导出为一个模块，使代码更紧凑
module.exports = {
    startServer: startServer
}
