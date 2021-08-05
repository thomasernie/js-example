
const express=require('express')

const app=express()
bodyParser = require('body-parser')
app.use(bodyParser.json());

const fetch=require('node-fetch')

const port=3002


const data={
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

app.get('/hello',async(req,res)=>{

    const fetchingDatas= await fetch('http://localhost:3001/student',{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"}
        
        })

        const output=await fetchingDatas.json()

        // .then(function(response) { 
        //     return response.json()          })

        // .then(function(response) { 
        //     res.send(response)          })
          
        //   .catch(function(error) { 
        //     console.log('Requestfailed', error) 
        //   })
          console.log(output);
          res.send(output)
})

app.listen(port)

