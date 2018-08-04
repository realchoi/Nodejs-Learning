// express框架的学习

// 关于express的一些方法，需要查看官方api文档

// 导入express库
var express = require('express');
var app = express();

app.get('/', function (request, response) {
    // 响应纯文本
    // var text = 'This is express homepage.';

    // 响应json对象
    // var jsonobj = {
    //     name: 'Eric',
    //     age: 18
    // }

    // 响应数组
    var arr = ['Eric', 18];

    // 响应内容
    // 响应的时候不需要对特定格式进行序列化等处理，因为express已经处理过了
    response.send(arr);
});

app.listen(3000);
console.log('Listening to port 3000.');