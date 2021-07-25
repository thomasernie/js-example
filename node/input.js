const express = require('express');
const app = express();
const port = 9000;
const fetch = require('node-fetch')
const Input = {
    branchStudent: [
        {
            id: 1, branchId: 10, studentId: 1
        },
        {
            id: 2, branchId: 22, studentId: 2
        },
        {
            id: 3, branchId: 22, studentId: 1
        },
        {
            id: 4, branchId: 22, studentId: 3
        }
    ],
    branches: [
        {
            id: 10, name: "CSE"
        },
        {
            id: 22, name: "IT"
        }
    ],
    students: [
        {
            id: 1, sName: "Jay"
        },
        {
            id: 2, sName: "Sanjay"
        },
        {
            id: 3, sName: "Rajesh"
        }
    ]
};


const options2 = {
    method: "POST",
    mode: 'cors',
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify(Input)
}

app.get('/', async (req, res) => {
    const resp = await fetch('http://localhost:2020/data', options2);
    const studentDetails = await resp.json();
    res.send(studentDetails);
});

app.listen(port, () => {
    console.log(`Listening ${port}`);
})


