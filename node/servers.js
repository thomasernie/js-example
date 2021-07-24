const fetch = require("node-fetch")
const express = require('express');
const app = express();
const port = 5000;
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
const data = { "names": "nithish" };
const options = {
    method: "POST",
    mode: 'cors',
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify(data)
};

const options2 = {
    method: "POST",
    mode: 'cors',
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify(input)
}

app.use(express.json());


app.get('/', (req, res) => {
    async function response() {
        const resp = await fetch('http://localhost:1000/hello', options);
        return resp;
    }
    response()
        .then(data => data.json())
        .then(data => console.log(data))
    res.send('data');
})

app.get('/student', (req, res) => {
    async function response() {
        const resp = await fetch('http://localhost:1000/student', options2);
        return resp;
    }
    response()
        .then(data => data.json())
        .then(data => console.log(data))
    res.send('data');
})

//const resp = await fetch('http://localhost:1000');
// console.log(resp.body);
// res.end();
// });

app.listen(port, () => console.log('Port 2 Listening'));
    // post to 1000 http://localhost:1000/hello
    // {"names":"nit"}
    //{"output:  hello nit"}
    // print send to this response
    // Send data
    // Get data
    // Print data
