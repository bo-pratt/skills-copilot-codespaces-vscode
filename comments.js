// Create web server
// load the module
var http = require('http');
var url = require('url');

// create server
http.createServer(function(req, res) {
    // parse the request url
    var url_parts = url.parse(req.url, true);
    // get the query string
    var query = url_parts.query;
    // get the comment
    var comment = query.comment;
    // write the comment to the response
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Your comment: ' + comment);
}).listen(8080, '