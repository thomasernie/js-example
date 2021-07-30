const express = require('express');

const app = express();

//const fetch('https://reqres.in/api/users")
const fetch = (require('node-fetch'));
const port = 4000;

    const StudentDetails = {    // varaible declaration (StudentDetails is an object)
        branchStudents:[        // array of elements
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
        Headers: {'content-Type':'application/json'},
        body: JSON.stringyfy(Output),//stringyfy()method converts js object or value to json string
    }
     //To start a request,call the special function fetch()

       app.get('/',async function(req,res){ //async function funcName(url){

       const response = await fetch('https://reqres.in/api/users')// const response = await fetch(url);
      
       return await response.json(); // 
    
    }

//.then(data => console.log(data))

//.catch(error => console.log('ERROR'))
   // console.log(fetch('https://reqres.in/api/users'))