// express模板引擎
// 模板引擎的作用，就是在前台页面嵌入后端的动态数据

var express = require('express');
var app = express();

// 指定使用的模板引擎（这里使用的是ejs模板引擎）
app.set('view engine', 'ejs');
// 设置模板引擎存放的位置
app.set('views', './07-views');

// 访问form页面
app.get('/form/:name', function (req, res) {
    var personName = req.params.name;
    // 使用模板引擎渲染页面
    // 'form'指定的是模板引擎的文件名，不用写文件格式后缀
    // person是传递到模板引擎的参数名称
    res.render('form', { person: personName });
});

app.listen(3000);