const express = require('express');
// const response  = require("express");
const app = express()

bodyParser = require('body-parser');
app.use(bodyParser.json());

const fetch = require("node-fetch");
const port= 4000;

// app.use(express.static('public'));
// app.use(express.json({limit:'1mb'}));
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
const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    }
}
app.get('/hello', async(request,response) =>{
    
    const apiCall = await fetch('http://localhost:3001/student',options) 
    .then (function(response){
    return response.json()
    })

    .catch(function(error){
        console.log('UNEXPECTED ERROR',error)
    })
    console.log(apiCall);
    response.send(apiCall)
})

app.listen(port) 