//post program(express)

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.post('/',function (req,res) {
  const input = req.body
  const mapprogram = require('./mapprogram')
  res.send(mapprogram(input))
  res.send(JSON.stringify(req.body, null, 2))
})
 
app.listen(2545,()=>
console.log(`example app listening at http://localhost:${2545}`))
