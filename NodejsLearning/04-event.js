// Node.js的事件

// 导入事件的核心库
var events = require('events');
// 导入一个临时使用的工具库
var util = require('util');


/* 
// 定义一个触发器
var myEmitter = new events.EventEmitter();

// 绑定事件：如果myevent事件发生，则打印msg
myEmitter.on('myevent', function (msg) {
    console.log(msg);
})

// 触发上述myevent事件
myEmitter.emit('myevent', '触发了myevent自定义事件！'); */


// 稍微复杂点的用法
// 定义一个类
var Person = function (name) {
    this.name = name;
}

// 让Person类继承EventEmitter类，以使Person类的对象具有绑定事件的功能
util.inherits(Person, events.EventEmitter);

// 定义三个Person类的对象
var eric = new Person('Eric');
var xiaoming = new Person('Xiaoming');
var lucy = new Person('Lucy');

// 将三个Person对象放入一个数组中
var person = [eric, xiaoming, lucy];

// 遍历person数组，让每一个Person对象绑定事件
person.forEach(function (i) {
    i.on('speak', function (msg) {
        console.log(i.name + ' say ' + msg);
    })
})

// 让每一个Person对象触发speak事件
eric.emit('speak', 'hi');
xiaoming.emit('speak', 'nihao');
lucy.emit('speak', 'hola');