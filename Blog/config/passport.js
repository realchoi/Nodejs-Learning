// passport 登录，本地登录策略（LocalStrategy）

var LocalStrategy = require('passport-local').Strategy
    , User = require('../models/users')
    , bcrypt = require('bcrypt');

module.exports = function (passport) {
    passport.use(new LocalStrategy(
        function (username, password, done) {
            // 先查询用户名是否存在
            User.findOne({ username: username }, function (err, user) {
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false, { message: 'Incorrect Username.' });
                }
                // 查询密码是否匹配
                bcrypt.compare(password, user.password, function (err, isMatch) {
                    if (err) {
                        return done(err);
                    }
                    if (isMatch) {
                        return done(null, user);
                    }
                    else {
                        return done(null, false, { message: 'Incorrect Password.' });
                    }
                });
            });
        }
    ));

    // session 会话
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
}
