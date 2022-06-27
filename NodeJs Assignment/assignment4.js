var fs=require('fs')

fs.writeFile('ex5.txt','hey ho! let\'s go',function(err){
    if(err)
    {
        return console.log(err);
    }
    console.log('The File Was Saved!');
});