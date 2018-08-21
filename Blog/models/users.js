// 用户 model
const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// model 的第一个参数 User，mongoose 会在和数据库连接时转换为 users，因此会连接上数据库中的 users 集合
let User = module.exports = mongoose.model("User", userSchema);