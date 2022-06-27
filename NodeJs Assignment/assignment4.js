var fs=require('fs')
var data='hey ho! let\'s go'

fs.writeFile('ex5.txt',function(err,data){
    if(err)
    {
        return console.log(err);
    }
    console.log('The File Was Saved!');
});