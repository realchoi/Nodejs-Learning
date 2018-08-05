// 中间件的使用

var express = require('express');
var app = express();

// 访问静态文件，'upload'表示静态文件存放的位置
// 访问静态文件的时候，直接输入'地址:端口号/静态文件的名称'即可
// 如访问localhost:3000/avatar_smile.png即可访问该图片
app.use(express.static('upload'));

// 使用自定义的中间件
app.use(function (req, res, next) {
    console.log('First middleware.');
    // 调用下一个中间件
    next();
    console.log('First middleware after.')
})

app.use(function (req, res, next) {
    console.log('Second middleware.');
    res.send('OK!');
})

// app.get('/', function (req, res) {
//     res.send('ok.');
// })

app.listen(3000);