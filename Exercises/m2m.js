//const { response } = require('express');
const express = require('express');
const app = express()
bodyParser = require('body-parser');
app.use(bodyParser.json());

const fetch = require('node-fetch');

const port = 5000;

    const Input = {    
        branchStudents:[        
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

    const options = {  //options objects that can have following values
     
        method: 'POST', //denotes the method type, it can be of any HTTP request type, like GET, POST, PUT, DELETE, etc.
        
      body: JSON.stringify(Input),//pass the data as a json

      headers: {'Content-Type':'application/json'}//n case we are passing data to the server, we need to additionally tell fetch that we are going to pass data in form of json/text, etc.  
    
     };
    
//stringyfy()method converts js object or value to json string
        //To start a request,call the special function fetch()

     app.get('/students',async (req,res) => {
      
        const myResponse = await fetch('http://localhost:3000/student',options)

        const studentDetails = await myResponse.json();

        res.send(studentDetails);  

    //       .then(response => response.json())

    //       .then( =>console.log(myResponse));
    //     //    return response.json()
        
    //        .catch(function(error){
    //         console.log('ERROR',error);
    
    //    });
    })    
           app.listen(port, () => {

             console.log(`app listening at http://localhost:${port}`);
     
       })
