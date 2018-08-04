// express的路由

var express = require('express');
var app = express();

// 下面的:id代表可变的路由
app.get('/user/:id/:name', function (req, res) {
    // 取出路由:id的实际值
    var id = req.params.id;
    var name = req.params.name;
    res.send(`You requested the user page of id: ${id}, and name is: ${name}`);
})

app.get('/', function (req, res) {
    // 取出url中?后面参数的值
    var query = req.query;
    console.dir(query);
    res.send(`Home page: ${query.page}`);
})

app.listen(3000);
console.log('Listening to port 3000.');