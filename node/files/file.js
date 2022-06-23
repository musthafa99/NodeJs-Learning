var fs=require('fs')
var data='Learning node.js'

fs.writeFile('./files/sample.txt','UTF-8',function(err,data){
    console.log("Completed")
})