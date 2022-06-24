var http=require('http')
var fs=require('fs');
const { stderr } = require('process');
var server=http.createServer(function(req,res){
    console.log("Request was made:" +req.url)
    res.writeHead(200,{'Content-type':'application/json'});
    var myobj={
        name:'Sahal',
        age:9,
        city:'Coimbatore'
    };
    res.end(JSON.stringify(myobj))
});

server.listen(2000,'127.0.0.1');
console.log('listening');
