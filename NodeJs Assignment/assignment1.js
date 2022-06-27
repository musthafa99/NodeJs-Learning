var http=require('http')
var port=3000
var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'})
    res.end('Hello Welcome')
})

server.listen(port,'127.0.0.1')
console.log('Sucess,I\'m is Listening on port:',port)
