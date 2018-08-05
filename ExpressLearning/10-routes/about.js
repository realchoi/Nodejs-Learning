var express = require('express');

// 路由
var router = express.Router();

router.get('/', function(req, res){
    res.send('关于！');
})

module.exports = router;