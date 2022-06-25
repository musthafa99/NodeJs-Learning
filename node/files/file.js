var fs=require('fs')
var data='Learning node.js'

fs.writeFile('./files/sample.txt',function(err,data){
    console.log("Completed")
})