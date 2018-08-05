// Todo 小程序

// 导入 express 库
var express = require('express');

// 导入自定义的路由模块
var todoController = require('./controllers/todoController');

// 初始化 express
var app = express();

// 使用 ejs 引擎模板
app.set('view engine', 'ejs');

// 指定静态文件的存放目录
app.use(express.static('./public'));

// 路由
todoController.todoController(app);

app.listen(3000);

console.log('You are listening to port 3000');