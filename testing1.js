
var express = require('express')
var bodyParser = require('body-parser')
var studentMap = require('./fun')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.post(function (req, res) {
//  res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

app.post('/convert',function (req, res) {
  const input=JSON.parse(req.body.data)
  const output=studentMap(input)
  res.send(JSON.stringify(output))
})

app.listen(1818,()=>
console.log(`example app listening at http://localhost:${1818}`))

//console.log(JSON.stringify(fun.studentMap));
 