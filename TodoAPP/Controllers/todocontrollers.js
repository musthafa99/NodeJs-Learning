var bodyparse=require('body-parser');
var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/Todo')

var todoschema=new mongoose.Schema({
    item:String
});

var todo=mongoose.model('Todo',todoschema);
var item=todo({item: 'buy chocolates'}).save(function(err){
    if(err) throw err
    console.log('item added to database')
});

//var data=[{item:'walk'},{item:'eat'},{item:'code'}];
module.exports=function(app){
var urlencoderparser=bodyparse.urlencoded({extended:false});
app.get('/todo',function(req,res){
    // get from mongodb
    todo.find({}, function(err,data){
        if(err) throw err;
        res.render('todoview',{value:data});
    });
    
});
app.post('/todo',urlencoderparser,function(req,res){
    // get data from view nad added to mongodb
    var newToDO=todo(req.body).save(function(err,data){
        if(err) throw err;
        res.json(data)
    });
    //data.push(req.body);
    //res.json(data);
});

app.delete('/todo/:value',function(req,res){
    todo.findOne({value: req.params.value.trim().replace(/ /g,'-')}).deleteOne(function(err,data){
        if(err) throw err;
        res.json(data)
});
   // data=data.filter(function(todo){
     //   return todo.item.trim().replace(/ /g,'-') !==req.params.value;
    //});
    //res.json(data)
});
};