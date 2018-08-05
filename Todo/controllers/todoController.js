// Todo 路由

// var data = [{ item: '学习 Node.js' }, { item: '看电影' }, { item: '买东西' }];

// 处理 post 请求时需要用到 body-parser 模块
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// mongoose: 操作 MongoDB 数据库的库
var mongoose = require('mongoose');
// 连接 MongoDB 数据库
mongoose.connect('mongodb://root:root88888887@ds123929.mlab.com:23929/todos', { useNewUrlParser: true });

var todoSchema = new mongoose.Schema({
    item: String
});

// 将本地程序的数据映射到数据库
var todoModel = mongoose.model('todo', todoSchema);

/*
// 添加数据
var itemOne = todoModel({ item: '学习 Node.js' }).save(function (err) {
    if (err) throw err;
    console.log('Data saved.');
});
*/

var todoController = function (app) {
    // 访问 todo 页面时的路由
    app.get('/todo', function (req, res) {
        // 从数据库中查找已有的数据，显示在页面上
        todoModel.find({}, function (err, data) {
            if (err) throw err;
            res.render('todo', { todos: data });
        });
    });

    // 新增代办项目时的路由
    app.post('/todo', urlencodedParser, function (req, res) {
        // 将请求的数据存入 MongoDB
        todoModel(req.body).save(function (err, data) {
            if (err) throw err;
            res.json(data);
            console.log('Data saved.');
        });
    });

    // 删除代办项目时的路由
    app.delete('/todo/:item', function (req, res) {
        /*
        // 将 data 里面的项目与接收到的参数相比，如果不相等，说明想要删除的不是当前项，则保留，否则不保留（即删除）
        data = data.filter(function (todo) {
            return todo.item.replace(/ /g, "-") !== req.params.item;
        });
        res.send("OK");
        */

        // 从数据库中查找和请求的数据相同的项，删除
        todoModel.find({ item: req.params.item.replace(/-/g, ' ') }).remove(function (err, data) {
            if (err) throw err;
            res.json(data);
            console.log('Data removed.');
        });
    });
}

module.exports = {
    todoController: todoController
}