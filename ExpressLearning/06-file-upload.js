// express文件上传

// 文件上传需要用到 multer 库

var express = require('express');
var fs = require('fs');
// 导入multer库
var multer = require('multer');
// 上传文件后，指定一个存放文件的路径（下面指定的是当前目录下的upload文件夹）
// var upload = multer({ dest: 'uploads/' });

// 创建文件夹的函数
var createFolder = function (folder) {
    try {
        // 判断文件夹是否存在（使用同步）
        // 如果不存在就抛出异常
        fs.accessSync(folder);
    } catch (error) {
        // 不存在就创建文件夹
        fs.mkdirSync(folder);
    }
};

// 创建文件夹用来存放上传的文件
var uploadFolder = './upload/';
createFolder(uploadFolder);

// 创建一个storage对象，可以按照自己想要的方式来存储文件
var storage = multer.diskStorage({
    // 设置存放位置
    destination: function (req, file, cb) {
        cb(null, uploadFolder);
    },
    // 设置上传后的文件的名称
    filename: function (req, file, cb) {
        // originalname表示文件的原始名称
        cb(null, file.originalname);
    }
});

// 使用storage
var upload = multer({ storage: storage });

var app = express();

// 访问form页面
app.get('/form', function (req, res) {
    // var formhtml = fs.readFileSync('./06-form.html', { encoding: 'utf8' });
    // res.send(formhtml);
    // 也可以使用express提供的方法
    res.sendFile(__dirname + '/06-form.html');
});


// form页面的提交按钮会请求这个post方法
// upload.single('file')中的file和表单中的上传控件的name名称对应，single代表单文件上传
app.post('/upload', upload.single('file'), function (req, res) {
    res.send({ 'ret_code': 0 });
});
app.listen(3000);