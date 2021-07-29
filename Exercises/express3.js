const express = require('express');

const app = express();

bodyParser = require('body-parser')

app.use(bodyParser.json());// Parses the text as JSON and exposes the resulting object on req.body.

const port = 7665;

     //app.get('/Hello',function(req,res){

    //const queryParam = req.query;

    //console.log(queryParam.name);

    //res.send(`Hello${queryParam.name}`);
    app.post('/Hello',(req,res)=>{

       const param = req.body;
        console.log(param.name);
        
        res.send(`Hello${param.name}`);
    });
        app.listen(port,() =>{
        console.log(`app listening at https://localhost:${port}`);
   
    })