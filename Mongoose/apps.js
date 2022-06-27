var express=require('express');
var app=express();
var mongoose=require('mongoose')
var bodyparser=require('body-parser')
var Book=require('./bookmodel')

mongoose.connect('mongodb://localhost:27017/books')

app.get('/',function(req,res){
    res.send('welcome to books page')
});

app.get('/books',function(req,res){
    Book.find({}, function(err,Book){
        if(err) res.send(err);
        res.json(Book);
});});
app.get('/books/:id',function(req,res){
    Book.findOne({}, function(err,Book){
        if(err) res.send(err);
        res.json(Book);
});});

app.listen(3000);
console.log("Listening");
