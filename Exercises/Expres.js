const express = require('express')

const app = express()

const port = 3004

app.get('/',(req,res)=>res.send('FR8!'))

app.get('/hello',(req,res)=>res.send('Hello FR8!'))

app.listen(port,()=>
     console.log('listening at http://localhost:${port}')