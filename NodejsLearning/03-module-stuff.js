// Node.js的模块
// 该文件定义需要暴露的模块，供其他文件使用

/* var counter = function (arr) {
    return "There are " + arr.length + " elements in the array.";
} */

var adder = function (a, b) {
    return `The sum of the two numbers is ${a + b}`;
}

var pi = 3.14;


// 暴露模块
/* module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi; */

// 上面暴露模块可以简写如下
module.exports = {
    // 可以直接将函数写进来
    counter: function (arr) {
        return "There are " + arr.length + " elements in the array.";
    },
    adder: adder,
    pi: pi
}