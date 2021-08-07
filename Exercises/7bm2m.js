const express = require('express');
// const response  = require("express");
const app = express()

bodyParser = require('body-parser');
app.use(bodyParser.json());

const fetch = require('node-fetch');
const port= 4000;

// app.use(express.static('public'));
// app.use(express.json({limit:'1mb'}));
const studentDetails =  {
    branchStudent: [
        { id: 1, branchId: 1, studentId: 1 },
        { id: 2, branchId: 2, studentId: 2 },
        { id: 3, branchId: 2, studentId: 1 },
        { id: 4, branchId: 1, studentId: 3 }
    ],
    branches: [
        { id: 1, name: "CSE" },
        { id: 2, name: "IT" }
    ],
    students: [
        { id: 1, name: "Jay" },
        { id: 2, name: "Sanjay" },
        { id: 3, name: "Rajesh" }
    ]
}
const options = {
    method: "POST",
    //body: FormData,
    body: JSON.stringify(studentDetails),
    headers: {
        "Content-Type": "application/json"
    }
}
app.get('/hello',async(req,res) =>{
    const returnData = await fetch('http://localhost:3000/student',options) 
    const output =  await returnData.json();
    console.log(output);
    res.send(output)
    
})

app.listen(port)