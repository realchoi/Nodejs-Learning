// Express的模板引擎的使用

// 比如几个页面有共同的部分，那么就使用模板，然后每个页面引用这个模板就好了

var express = require('express');
var app = express();

// 指定使用的模板引擎（这里使用的是ejs模板引擎）
app.set('view engine', 'ejs');
// 设置模板引擎存放的位置
app.set('views', './07-views');

// 访问index页面
app.get('/index', function (req, res) {
    // 使用模板引擎渲染页面
    // 'index'指定的是模板引擎的文件名，不用写文件格式后缀
    res.render('index');
});

// 访问about页面
app.get('/about', function (req, res) {
    // 使用模板引擎渲染页面
    // 'about'指定的是模板引擎的文件名，不用写文件格式后缀
    res.render('about');
});

app.listen(3000);