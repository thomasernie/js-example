var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
//const shilpa= require('./shilpa')
//console.log(JSON.stringify(shilpa.branchStudentMap));
 
app.post('/convert',function (req, res) {
  //res.setHeader('Content-Type', 'text/plain')
  const input=req.body
  const output=branchStudentMap(input)
  res.send=branchStudentMap(input)
  //res.end(JSON.stringify(req.body, null, 2))
})
app.listen(2222,()=>
console.log(`example app listening at http://localhost:${2222}`))
