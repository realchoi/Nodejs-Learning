// 重构 articles 路由

const express = require('express');
// 表单验证库
const { check, validationResult } = require('express-validator/check');

// articles model
let Article = require('../models/articles');

let router = express.Router();

router.get('/', function (req, res) {
    // 从数据库中的 articles 集合中查找所有的记录
    Article.find(function (err, articles) {
        // 渲染模板引擎文件（views 文件夹下的模板文件），并传递数据（对象）
        res.render('articles/index', {
            articles: articles
        });
    })
});

router.get('/new', function (req, res) {
    // 渲染模板引擎文件（views 文件夹下的模板文件）
    res.render('articles/newarticle');
});

router.post('/create', [
    // title must be at least 1 chars long
    check('title').isLength({ min: 1 }).withMessage('Title is required.'),
    check('author').isLength({ min: 1 }).withMessage('Author is required.'),
    check('body').isLength({ min: 1 }).withMessage('Body is required.')
], function (req, res) {
    // 验证表单是否提示错误
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.render('articles/newarticle', {
            errors: errors.array(),
            // 将已经输入的内容传递过去，填充到表单
            article: req.body
        });
    } else {
        var article = new Article(req.body);
        // 保存到数据库
        article.save(function (err) {
            if (err) {
                console.log('文章保存进数据库发生错误：' + err);
            } else {
                // 显示提示信息
                req.flash('success', 'Article added successfully.');
                // 跳转到 articles 页面
                res.redirect('/');
            }
        });
    }
});

router.get('/:id', function (req, res) {
    // 文章详细页面
    Article.findById(req.params.id, function (err, article) {
        if (err) {
            console.log("获取文章内容发生错误");
        } else {
            res.render('articles/articledetails', {
                article: article
            });
        }
    });

});

router.get('/:id/edit', function (req, res) {
    // 修改文章页面
    Article.findById(req.params.id, function (err, article) {
        if (err) {
            console.log("修改文章内容发生错误");
        } else {
            res.render('articles/editarticle', {
                article: article
            });
        }
    });
});

router.post('/:id/edit/update', function (req, res) {
    // 修改文章提交
    var query = { _id: req.params.id };
    Article.update(query, req.body, function (err) {
        if (err) {
            console.log(err);
            return;
        } else {
            req.flash('success', 'Article updated successfully.');
            res.redirect('/articles/' + req.params.id);
        }
    });
});

router.delete('/:id', function (req, res) {
    // 删除文章
    var query = { _id: req.params.id };
    Article.remove(query, function (err) {
        if (err) {
            console.log(err);
        }
        req.flash('success', 'Article deleted successfully.');
        res.send('Delete successfully.');
    });
});

module.exports = router;