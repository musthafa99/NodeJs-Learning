var bodyparse=require('body-parser');
var data=[{item:'walk'},{item:'eat'},{item:'code'}];
module.exports=function(app){
var urlencoderparser=bodyparse.urlencoded({extended:false});
app.get('/todo',function(req,res){
    res.render('todoview',{value:data});
});
app.post('/todo',urlencoderparser,function(req,res){
    data.push(req.body);
    res.json(data);
});

app.delete('/todo/:value',function(req,res){
    data=data.filter(function(todo){
        return todo.item.trim().replace(/ /g,'-') !==req.param.value;
    });
    res.json(data)
});
};