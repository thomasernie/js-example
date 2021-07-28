const express = require('express');

const app = express();


const port = 8105;

     app.get('/Hello',function(req,res){

    const queryParam = req.query;

    console.log(queryParam.name);

    res.send(`Hello${queryParam.name}`);

   
});
    app.listen(port,() =>{
        console.log(`app listening at https://localhost:${port}`);
    })
