const express = require('express')//import express in our file..access through variable express 
//create an application 
const app = express()//assign it to const app

const port = 3000

//app.get(route,callback)
//The callback function has 2 parameters, request(req) and response(res). 
app.get('/',(req,res)=>res.send('FR8!'))

app.get('/hello',(req,res)=>res.send('Hello FR8!'))

app.listen(port,()=>
     console.log('listening at http://localhost:${port}')