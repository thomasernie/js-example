const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>res.send('FR8!'))
app.get('/hello',(req,res)=>res.send('Hello FR8!'))

app.listen(port,()=>
console.log(`example app listening at http://localhost:${port}/hello?=name=jay`))