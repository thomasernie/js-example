
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post(function (req, res) {
 res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.post('/convert',function (req, res) {
  //res.setHeader('Content-Type', 'text/plain')
  const input=req.body
  const fun= require('./fun')
  const output=studentMap(input)
  res.send=studentMap(input)
  res.end(JSON.stringify(req.body, null, 2))
})

app.listen(1818,()=>
console.log(`example app listening at http://localhost:${1818}`))

//console.log(JSON.stringify(fun.studentMap));
 