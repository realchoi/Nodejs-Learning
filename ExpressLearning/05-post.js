// express的post请求

// post请求使用的是 body-parser 库

var express = require('express');
// 导入body-parser库
var bodyParser = require('body-parser');

var app = express();
// 使用中间件（后期会学习到）：
// 解析表单内容
// app.use(bodyParser.urlencoded({ extended: false }));

// 解析json
// app.use(bodyParser.json());

// post请求
// app.post('/', function (req, res) {
//     // 输出post表单传递的内容（一个对象）
//     console.dir(req.body);
//     // 获取对象中具体的键值
//     res.send(req.body.name);
// });


// 如果既能解析表单内容，又能解析json，需要定义对应的解析方式
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
// 访问/form使用表单内容解析方式
app.post('/form', urlencodedParser, function (req, res) {
    res.send(req.body.name);
});
// 访问/upload使用json解析方式
app.post('/upload', jsonParser, function (req, res) {
    res.send(req.body.name);
});

app.listen(3000);