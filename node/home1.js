var http=require('http')
var fs=require('fs')
var server=http.createServer(function(req,res){
    console.log("Request was made:" +req.url)
    res.writeHead(200,{'Content-type':'text/html'});
    var myreadstream=fs.createReadStream(__dirname + '/home.html','Utf8');
    myreadstream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('listening');
