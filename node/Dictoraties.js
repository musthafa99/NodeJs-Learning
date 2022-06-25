var fs=require('fs') 

fs.mkdir('files',function(){
    fs.readFile('football.txt','UTF8', function(err,data){
        fs.writeFile('./files/fooball.txt',data)
    });
});