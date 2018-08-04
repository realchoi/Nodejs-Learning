// Node.js的路由
// 路由的重构

var http = require('http');
// url工具库
var url = require('url');
// 解析字符串
var querystring = require('querystring');

var startServer = function (handle, route) {
    var onRequest = function (request, response) {
        // 获取请求的地址（通过url模块解析后，地址不包括后面的参数等）
        var pathname = url.parse(request.url).pathname;

        var data = [];
        request.on('error', function (err) {
            console.error(err);
        }).on('data', function (chunk) {
            data.push(chunk);
        }).on('end', function () {
            // 如果是表单POST请求
            if (request.method === 'POST') {
                // 数据过大销毁连接
                if (data.length > 1e6) {
                    request.connection.destory();
                }
                data = Buffer.concat(data).toString();
                route(pathname, handle, response, querystring.parse(data));
            }
            // 如果不是POST（这里只考虑GET请求） 
            else {
                // 获取地址后面的参数
                var params = url.parse(request.url, true).query;
                console.log('Request received: ' + pathname);
                route(pathname, handle, response, params);
            }
        })
    }

    var server = http.createServer(onRequest);
    server.listen(3000);
    console.log('Server started at port 3000.');
}

// 导出为一个模块，使代码更紧凑
module.exports = {
    startServer: startServer
}
