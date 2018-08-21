// 一个博客系统

const express = require('express');
// 操作路径
const path = require('path');
// 连接 MongoDB
const mongoose = require('mongoose');
// 解析 post 请求
const bodyParser = require('body-parser');
// session 库
const session = require('express-session');
// passport 库，登录 / 注销
const passport = require('passport');

// 引入 passport 自定义配置
require('./config/passport')(passport);

// 连接 MongoDB 数据库
mongoose.connect("mongodb://localhost/nodejs-blog", { useNewUrlParser: true });
let db = mongoose.connection;

// 连接成功
db.on('open', function () {
    console.log('MongoDB connect successfully.');
});

// 连接失败
db.on('error', function (err) {
    console.log(err);
});

const app = express();

// passport
app.use(passport.initialize());
app.use(passport.session());

// 解析 post 请求
app.use(bodyParser.urlencoded({ extended: false }));
// 指定静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 指定模板的存放路径：当前目录下的 views 文件夾
app.set('views', path.join(__dirname, 'views'));
// 指定使用的模板引擎：pug
app.set('view engine', 'pug');

// 使用 session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

// 使用 flash 显示提示信息
app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});
// articles model
let Article = require('./models/articles');

// 使用自定义的 articles 路由中间件
let articles = require('./routes/articles');
app.use('/articles', articles);

// 使用自定义的 users 路由中间件
let users = require('./routes/users');
app.use('/users', users);

// 所有的请求，存储用户信息
app.get('*', function (req, res, next) {
    res.locals.userinfo = req.user || null;
    next();
});

app.get('/', function (req, res) {
    // 从数据库中的 articles 集合中查找所有的记录
    Article.find(function (err, articles) {
        // 渲染模板引擎文件（views 文件夹下的模板文件），并传递数据（对象）
        res.render('articles/index', {
            articles: articles
        });
    });
});

app.listen(5000, function () {
    console.log('Server is listening to port 5000...');
});