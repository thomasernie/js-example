const express = require('express');
 const app = express();
 bodyParser = require('body-parser');
 app.use(bodyParser.json());
app.post('/',function(request,response){
    const para = request.body;
    console.log(para)
    response.send(`{Output:"hello ${para.name}"}`);
});


 app.listen(6060,
    () => console.log("the server started at http://localhost:6060"));