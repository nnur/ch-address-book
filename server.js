var connect = require('connect');
var serveStatic = require('serve-static');
var PORT = 8080;

connect().use(serveStatic(__dirname + '/node_modules/angular'))
    .use(serveStatic(__dirname + '/public')).listen(PORT);

console.log("Running on http://localhost:" + PORT);
