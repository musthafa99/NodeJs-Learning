var express=require('express')

app=express()

app.get('/',function(req,res){
    res.send("This is Homepage")
})

app.get('/contact',function(req,res){
    res.send("This is Contact")
})
app.listen(3000)