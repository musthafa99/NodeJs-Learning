var http=require('http')
var dateTime=requie('./index')

Server(function(req,res)
{
    res.write("Current Date And time"+dateTime.CurrentDateTime())
    res.end()
}).leisten(8080)