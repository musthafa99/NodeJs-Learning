module.exports =function(app){

app.get('/todo',function(req,res){
    res.render('todoview')
});
app.post('/todo',function(req,res){

});

app.delete('/todo',function(req,res){

});
};