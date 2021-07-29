var express = require('express');
var app = express();

app.get('/welcome', function(request, response) {
    var name = request.query.name;
     response.send(`welcome to fr8 ${name}`);
});

app.listen(3000);
console.log("the server started at http://localhost:3000");


 