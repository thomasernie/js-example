const express = require('express')
const app = express()
const port = 2203

    app.get ('/',(req,res)=> {
        res.send('Hello FR8');
    });
    

app.listen(port,()=>
console.log(`example app listening at http://localhost:${port}`));