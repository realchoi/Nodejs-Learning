// 路由中间件的使用

var express = require('express');
var app = express();

// 导入路由
var indexRouter = require('./10-routes/index');
var aboutRouter = require('./10-routes/about');

app.use('/', indexRouter);
app.use('/about', aboutRouter);

app.listen(3000);