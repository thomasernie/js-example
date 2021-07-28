const express = require('express')

const app = express()


const port = 8000;

// app.get('/',(req,res)=>res.send('FR8!'))

app.get('/:id',(req,res)=>res.send(req.params.id))

app.listen(port,()=>

    console.log(` listening at http://localhost:${port}/hello?=name=jay`))
