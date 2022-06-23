var event=require('events')
var util=require('util')

var Person=function(name){
    this.name=name
};

util.inherits(Person,event.EventEmitter);

var sahal=new Person('sahal')
var lishan=new Person('lishan')
var raina=new Person('raina')

var people=[sahal,lishan,raina]

people.forEach(function(Person){
    Person.on(('speak'),function(msg){
        console.log(Person.name + ' said ' +  msg)
    });
});

sahal.emit('speak','hello Everyone')
lishan.emit('speak','I want to become Police')
raina.emit('speak','I am cricket player')
