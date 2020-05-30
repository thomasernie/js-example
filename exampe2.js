
const express = require('express')
const app = express()
const port = 4099

    app.get ('/',(req,res)=> {
        res.send('Hello FR8');
    });
    app.get ('/hello',(req,res)=> {
        let name = req.query.name;
        
        res.send('hello'+ name)

    })

app.listen(port,()=>
console.log(`example app listening at http://localhost:${port}`));