const fetch = require('node-fetch')
const express = require('express');
const route = express.Router();

const input = {
    "branchStudents": [
        {
            "id": 1,
            "branchId": 10,
            "studentId": 1
        },
        {
            "id": 2,
            "branchId": 22,
            "studentId": 2
        },
        {
            "id": 3,
            "branchId": 22,
            "studentId": 1
        },
        {
            "id": 4,
            "branchId": 10,
            "studentId": 3
        }
    ],
    "branches": [
        {
            "id": 10,
            "name": "CSE"
        },
        {
            "id": 22,
            "name": "IT"
        }
    ],
    "students": [
        {
            "id": 1,
            "sName": "Jay"
        },
        {
            "id": 2,
            "sName": "Sanjay"
        },
        {
            "id": 3,
            "sName": "Rajesh"
        }
    ]
}

const options2 = {
    method: "POST",
    mode: 'cors',
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify(input)
}

route.get('/student', async (req, res) => {
    const resp = await fetch('http://localhost:1000/student', options2);
    const studentDetails = await resp.json();
    res.send(studentDetails);
})

module.exports = route;