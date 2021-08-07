const express = require('express')
const app = express()

bodyParser = require('body-parser')
app.use(bodyParser.json())

const fetch = require('node-fetch')
const port= 5698;

const data =  {
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
};
const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
}
app.get('/hello', function(req,res){
const returnData = fetch('http://localhost:3000/student',options) 
.then(res => res.json())
.then(newData => {
    res.send(newData)
})
.catch(function(error){       
    console.log('UNEXPECTED ERROR',error)
})
})
app.listen(port)
