// Node.js的回调函数

// 定义一个普通函数
var sayHi = function (name) {
    console.log("Hi, " + name);
}

// 定义一个回调函数，参数是一个普通函数
var callFunction = function (fun, name) {
    fun(name);
}

// 调用回调函数
callFunction(sayHi, "Eric");

// 有时直接调用匿名函数
callFunction(function (name) {
    console.log("Bye, " + name);
}, "Eric");