var express=require('express')

app=express()
app.set('view engine','ejs')
app.use('/assests',express.static('assests'))
app.get('/',function(req,res){
    res.sendFile(__dirname+ '/home.html')
})

app.get('/contact',function(req,res){
    res.sendFile(__dirname+ '/contact.html')

})

app.get('/profile/:name',function(req,res){
    var data={age:29,job:'studying',hobbies:['eating','fishing','playing']}
    res.render('profile',{person:req.params.name,data:data})


})
app.listen(3000)