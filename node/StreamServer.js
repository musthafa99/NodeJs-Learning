var http=require('http')
var fs=require('fs')
var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'plain/text'})
    var myreadstream=fs.createReadStream(__dirname + '/cricket.txt','UTF8')
var myWritestream=fs.createWriteStream(__dirname + '/writeme.txt')

myreadstream.pipe(myWritestream)
    res.end('hello welcome to NodeJS Learning')
})

server.listen(5000,'127.0.0.1')
console.log('listening')
