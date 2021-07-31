const express = require('express');  
// const express is declaring local variable 
// require is the input - importing express module in ('express') / to include a module express use require() function

const app = express()   
// passing express completely to const variable app - init express

bodyParser = require('body-parser');
/*to get access to the post data we have to use body-parser and expose to the response
Body Parser can parse string based client request body into JavaScript Object
we require body-parser module - this module provides middleware for parsing(analyzing/converting) data
*/
app.use(bodyParser.json());
//Returns middleware that only parses json 
//returns the json() first and then prints the console

const fetch = require('node-fetch');
//import node-fetch module using require function and fetch is local variable name
// node-fetch package allows us to retrieve text from the web server, a whole web page, or data from using REST API. 

const port= 4000;
// port number - its a number/address of every application which helps to communicate via internet
// "port = 3000" is the server port address

//sending the data
const data =  {
    branchStudent: [
        { id: 1, branchId: 1, studentId: 1 },
        { id: 2, branchId: 2, studentId: 2 },
        { id: 3, branchId: 2, studentId: 1 },
        { id: 4, branchId: 1, studentId: 3 }
    ],
    branch: [
        { id: 1, name: "CSE" },
        { id: 2, name: "IT" }
    ],
    student: [
        { id: 1, name: "Jay" },
        { id: 2, name: "Sanjay" },
        { id: 3, name: "Rajesh" }
    ]
}
//receiving the data
const options = {           // represents a request for information
    method: "POST", // 
    body: JSON.stringify(data),  //JSON.stringify() method converts a JavaScript object or value to a JSON string
    headers: {
        "Content-Type": "application/json"  //is used to determine what media type the middleware will parse
    }
}

app.get('/hello', async(request,response) =>{  //async()- It makes sure that a promise is returned 
    const apiCall = await fetch('http://localhost:3001/student',options)  // fetch the data from the url - await - pauses untill a promise is settled
    .then (function(response){       //then() function returns a new promise/response
        return response.json();   // res.json() function sends a JSON response. (sends the converted parameter to json )
    
    }).catch(function(error){       // catch() method returns a Promise and deals with rejected cases only
        console.log('UNEXPECTED ERROR',error)
    })
    response.send(apiCall)
})

app.listen(port)
 