var mongoose=require('mongoose')
var bookschema=new mongoose.Schema({
    title:String,
    author:String,
    category:String
});

module.exports=mongoose.model('Books',bookschema)