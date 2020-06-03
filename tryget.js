/*
const express = require('express')
var app = express()
const bodyParser = require('body-parser');
 app.use(bodyParser.json()); 
 var dogsArr = [];
 app.post('/dogs', function(req, res) {
    var dog = req.body;
    console.log(dog);
    dogsArr.push(dog);
    res.send("Dog added!");
})
app.listen(5353,()=>
console.log(`example app listening at http://localhost:${5353}`))
*/
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('hello deva')
})

app.listen(3000)