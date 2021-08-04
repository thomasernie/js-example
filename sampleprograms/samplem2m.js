const { response } = require('express');
const express = require('express');
const app = express()
bodyParser = require('body-parser');
app.use(bodyParser.json());

const fetch = require('node-fetch');

const port = 9843;

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

const options = {
    method: 'POST',
    body: JSON.stringify(Input),
    headers: {
        'Content-Type': 'application/json'
    }
}
//app.get('/',(req,res) => res.send('nothing'))


app.get('/students',function(req,res){

const output = fetch('http://localhost:3000/student', options)
   
    .then(res => res.json())

    .then(response => {
        res.send(response)
    })
   // .catch(error => `ERROR:`)
    .catch(err => {
        console.error('Error:',err)
    })

}) 
    app.listen(port, () => {

    console.log(`app listening at http://localhost:${port}`);

})

  