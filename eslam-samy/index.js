const express = require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');

//settingup express 
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/Librarygo');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/order',require('./routes/order'));

app.use('/student',require('./routes/student'));

app.use('/book',require('./routes/book'));

//error handling 
app.use(function(err,req,res,next){
  res.status(422).send({error:err.massage});
});

//listennig to requst
app.listen(process.env.port || 4000, function(){
  console.log('now listening for requst on port');
});
