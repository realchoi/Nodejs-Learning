// 路由的重构

var fs = require('fs');

var route = function (url, handle, response) {
    console.log('url: ' + url);
    if (typeof (handle[url]) === 'function') {
        handle[url](response);
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(response);
    }
}

module.exports.route = route;