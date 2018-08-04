// 路由的重构
// 程序的入口

var server = require('./server');
var router = require('./router');
var handler = require('./handler');

var handle = [];
handle['/'] = handler.home;
handle['/home'] = handler.home;
handle['/api/v1/record'] = handler.api_record;

server.startServer(handle, router.route);