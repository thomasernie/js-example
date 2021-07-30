var express = require('express');
var app = express();

app.get('/welcome', function(request, response) {   
    var name = request.query.name;                   //query is a parameter '?' thiz used to help define what we give up will be executed .this query will be seperated by &
     response.send(`welcome to fr8 ${name}`);
});

app.listen(3000);//this function is used to listen to the port we are running.if we didnt give thiz the port will not run.

console.log("the server started at http://localhost:3000");


 