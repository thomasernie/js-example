const express = require('express');
const response  = require("express");
const app = express()
bodyParser = require('body-parser');
app.use(bodyParser.json());
const fetch = require("node-fetch");
const port= 9843;
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));
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
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
};

app.get('/student', async(request,response) =>{
    
    const abcd=await fetch('http://localhost:3013/student',options)
    .then (function(response){
        response.json()
    })

    .catch(function(error){
        console.log('requested error',error)
    })
    console.log(abcd)
    response.send(abcd)
})

app.listen(port, () =>{ console.log('listening at 3002')
});