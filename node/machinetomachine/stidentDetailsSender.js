const express = require('express');
const app1 = express();
const port1 = 4000;

app1.use(express.json());


const Input = {
    branchStudent: [
        { id: 1, branchId: 10, studentId: 1 },
        { id: 2, branchId: 22, studentId: 2 },
        { id: 3, branchId: 22, studentId: 1 },
        { id: 4, branchId: 22, studentId: 3 }
    ],
    branches: [
        { id: 10, name: "CSE" },
        { id: 22, name: "IT" }
    ],
    students: [
        { id: 1, sName: "Jay" },
        { id: 2, sName: "Sanjay" },
        { id: 3, sName: "Rajesh" }
    ]
};

app1.get('/', (req, res) => {
    res.send('second port');
})

app1.post('/', (req, res) => {
    //seend input
    req.body = data;
    res.send(req.body);
    // get output
    
    // print output
})

app.listen(port, () => console.log('Port one Listening'));
app1.listen(port1, () => console.log('Port two Listening'));
