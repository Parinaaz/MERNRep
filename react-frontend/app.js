//app.js

var express =require('express');
var app=express();


var port =4200;

app.listen(port,function(){

	console.log('Server is running on port: ',port);
})
app.get('/',function(req,res){
	res.send('Hello Express');
});