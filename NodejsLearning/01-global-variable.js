// Node.js的全局对象

// 1.console
console.log("I am learning Node.js.");

// 2.setTimeout定时器
setTimeout(() => {
    // 3秒后执行
    console.log("3 seconds have passed.");
}, 3000);

// 3.setInterval定时器
var time = 0;
var timer = setInterval(() => {
    time++;
    // 每1秒执行一次
    console.log(time + (time == 1 ? " second has passed." : " seconds have passed."));

    if (time >= 3)
        // 3秒后终止定时器
        clearInterval(timer);
}, 1000)

// 4.__dirname（两个下划线）：当前目录
console.log("Current directory name: " + __dirname);

// 5.__filename（两个下划线）：当前文件目录
console.log("Current file name: " + __filename);

// 6.require，exports（模块module中会使用到）