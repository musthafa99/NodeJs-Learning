var express=require('express');
var app=express();
var mongoose=require('mongoose')
var bodyparser=require('body-parser')
var Book=require('./bookmodel')

mongoose.connect('mongodb://localhost:27017/books')
var urlencoderparser=bodyparser.urlencoded({extended:false});
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
app.post('/books',urlencoderparser,function(req,res){
    var newBook=new Book();
    newBook.title=req.body.title;
    newBook.author=req.body.author;
    newBook.category=req.body.category;

    newBook.save(function(err,Book)
    {
        if(err) res.send(err);
        console.log(Book);
        res.json(Book);
    });
});

app.post('/book2',function(req,res){
    Book.create(req.body,function(err,Book){
        if(err) res.send(err);
        console.log(Book);
        res.json(Book);
    });
});

app.put('/book/:id',urlencoderparser,function(req,res){
    Book.findOneAndUpdate({
        _id:req.params.id
    },
    {$set:{author: req.body.author}},
    {upsert:true},
    function(err,Book){
        if(err) res.send(err);
        console.log(Book);
        res.send(Book);
    });
});
app.listen(3000);
console.log("Listening");
