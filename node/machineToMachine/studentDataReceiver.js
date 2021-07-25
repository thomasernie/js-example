const routeObject = require('./routeObject');
const routeStudent = require('./routeStudent');
const express = require('express');
const app = express();
const port = 5000;


app.use(express.json());

//Getting object as return
app.use(routeObject);

//Getting student details
app.use(routeStudent);

app.listen(port, () => console.log('Port 2 Listening'));



    // post to 1000 http://localhost:1000/hello
    // {"names":"nit"}
    //{"output:  hello nit"}
    // print send to this response
    // Send data
    // Get data
    // Print data
