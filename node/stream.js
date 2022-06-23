var http=require('http')

var fs=require('fs')

var myreadstream=fs.createReadStream(__dirname + '/cricket.txt','UTF8')
var myWritestream=fs.createWriteStream(__dirname + '/writeme.txt')

myreadstream.pipe(myWritestream)