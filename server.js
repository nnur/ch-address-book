var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic(__dirname + '/node_modules/angular'))
    .use(serveStatic(__dirname + '/public')).listen(8080);
console.log("I have awoken");
