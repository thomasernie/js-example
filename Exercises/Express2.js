const express = require('express')

const app = express()


const port = 8000;

app.get('/:users',function(req,res){

    const queryParam = req.query;
    console.log(queryParam.name);
    res.json(`hello${queryParam.name}`);
    
   
});
    app.listen(port,()=>
     console.log(`listening at http://localhost:${port}hello?name=jay`));
