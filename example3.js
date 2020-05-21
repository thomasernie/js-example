
var express = require('express');
var app = express();

app.use('/hello',function(req,res,next){
console.log("A New request received");
next();
});

app.get('/hello',function(req,res){
    res.send('hello fr8!');
});

app.listen(4000);