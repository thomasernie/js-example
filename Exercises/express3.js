const express = require('express');

const app = express();

bodyParser = require('body-parser');//middleware

app.use(bodyParser.json());//JSON.parse() method takes a string as input and transforms it into an object.
// Parses the text as JSON and exposes the resulting object on req.body.

const port = 7665;

     //route handler
    app.post('/Hello',(req,res)=>{

       const param = req.body;
        console.log(param.name);
        res.send(`{Output:Hello${param.name}}`);
    });
        app.listen(port,() =>{
        console.log(`app listening at https://localhost:${port}`);
   
    })