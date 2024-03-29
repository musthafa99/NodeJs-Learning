var express=require('express')

app=express()
app.set('view engine','ejs')

app.get('/',function(req,res){
    res.render('home')
})

app.get('/contact',function(req,res){
    res.render('contact')

})

app.get('/profile/:name',function(req,res){
    var data={age:29,job:'studying',hobbies:['eating','fishing','playing']}
    res.render('profiles',{person:req.params.name,data:data})
})
app.listen(3000)