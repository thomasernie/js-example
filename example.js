
const express = require('express')
const app = express()
const port = 4005

app.put('/user',function(req,res)
{
    res.send('Got a PUT request at/user')
})

app.listen(port,()=>
console.log(`example app listening at http://localhost:${port}`))