const express = require('express');
 const app = express();
 bodyParser = require('body-parser');//body parser is an module or a middleware module .it is used to enter req body and get response body
 app.use(bodyParser.json());//we need the req,res data body in json file.(strings)
app.post('/',function(request,response){//post methoud use to send data to the server.we use post methoud in postman
    const para = request.body;//we assign a name to the request.body 
    console.log(para)
    response.send(`{Output:"hello ${para.name}"}`);
});


 app.listen(6060,
    () => console.log("the server started at http://localhost:6060"));