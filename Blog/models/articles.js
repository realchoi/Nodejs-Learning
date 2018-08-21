// 文章 model
const mongoose = require('mongoose');

let articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

// model 的第一个参数 Article，mongoose 会在和数据库连接时转换为 articles，因此会连接上数据库中的 articles 集合
let Article = module.exports = mongoose.model("Article", articleSchema);