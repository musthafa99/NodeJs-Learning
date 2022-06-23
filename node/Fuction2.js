function callFunction(fun){
    fun();
}


var pet=function(){
    console.log('Name of pet is Cat');
};


callFunction(pet());