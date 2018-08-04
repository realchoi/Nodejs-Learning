// 路由的重构

var fs = require('fs');

function home(response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(response);
}

function api_record(response, params) {
    // var jsonObj = {
    //     name: 'Eric',
    //     job: 'Programmer',
    //     age: 18
    // };
    response.writeHead(200, { 'Content-Type': 'application/json' });
    // response.end(JSON.stringify(jsonObj));
    response.end(JSON.stringify(params));
}

module.exports = {
    home: home,
    api_record: api_record
}