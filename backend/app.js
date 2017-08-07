var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 4200;
var cors = require('cors');

// Mongoose connection with mongodb
mongoose.connect("mongodb://localhost:27017/cmuktestdb", function (err, db) {
   
     if(err) throw err;

     //Write databse Insert/Update/Query code here..
                
});


// Required application specific custom router module
var eventRouter = require('./src/routes/eventRouter');

// Use middlewares to set view engine and post json data to the server
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/events', eventRouter);


// Start the server
app.listen(port, function(){
  console.log('Server is running on Port: ',port);
});