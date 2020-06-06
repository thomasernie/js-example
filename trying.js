
const express = require('express');
const bodyParser = require('body-parser');
var app = express();

 
app.use(bodyParser.json())



app.post('/slow',function (req, res) 
{
  const input=req.body 
  const studentMapBuilder = require('./studentMapBuilder');
  res.send(studentMapBuilder(input));
  res.end(JSON.stringify(req.body, null, 2)) 
  console.log('post method')
  })
  app.listen(2345)
  console.log('post method')