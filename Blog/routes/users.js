// users 路由

const express = require('express');
// 表单验证库
const { check, validationResult } = require('express-validator/check');
// 加密模块
const bcrypt = require('bcrypt');
// users model
let User = require('../models/users');
// passport 登录 / 注销
const passport = require('passport');

let router = express.Router();

// 注册
router.get('/register', function (req, res) {
    res.render('users/register');
});

router.post('/register', [
    check('username').isLength({ min: 1 }).withMessage('Username is required.'),
    check('email').isEmail().withMessage('Invalid email address.'),
    check("password", "Password is required.")
        .isLength({ min: 1 })
        .custom((value, { req, loc, path }) => {
            if (value !== req.body.password_confirmation) {
                // trow error if passwords do not match
                throw new Error("Passwords don't match.");
            } else {
                return value;
            }
        })
], function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.render('users/register', {
            errors: errors.array(),
            // 将已经输入的内容传递过去，填充到表单
            user: req.body
        });
    } else {
        var user = new User(req.body);

        // 给密码加密，存进数据库
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    console.log("加密出错...");
                    return;
                } else {
                    // 取加密后的密码
                    user.password = hash;
                    user.save(function (err) {
                        if (err) {
                            console.log('注册用户到数据库的时候发生错误：' + err);
                        } else {
                            // 显示注册成功信息
                            req.flash('success', 'User registered successfully.');
                            // 跳转到登录页面
                            res.redirect('/users/login');
                        }
                    });
                }
            });
        });
    }
});

// 登录
router.get('/login', function (req, res) {
    res.render('users/login');
});

router.post('/login', function (req, res, next) {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/login',
        failureFlash: true,
        successFlash: 'Login successfully.'
    })(req, res, next);
});

// 退出登录
router.get('/logout', function (req, res) {
    req.logout();
    req.flash('success', 'Logged out successfully.');
    res.redirect('/users/login');
});

module.exports = router;