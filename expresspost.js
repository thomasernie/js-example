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
app.post('/convert',function (req, res) {
  const input = req.body
  console.log('input',input)
  
  const output = branchstudentMap
  console.log('output',output)

  res.send(branchstudentMap)
  res.end(JSON.stringify(req.body, null, 2))


const mapex = require('./mapex')
console.log(mapex.branchstudentMap)
res.send(input)

})

app.listen(4455,()=>
console.log(`example app listening at http://localhost:${4455}`))
