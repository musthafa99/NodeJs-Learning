var express=require('express');
var todocontroller=require('./Controlllers/TodoController');
var app=express
//set up template Engine 
app.set('view engine','ejs');


app.use(express.static('./public'));

todocontroller(app);

app.listen(3000);
console.log("Listening");