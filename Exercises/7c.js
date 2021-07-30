var express = require('express');
var app = express();
const fetch = require("node-fetch");
// const data = {
//     branchStudent: [
//         { id: 1, branchId: 1, studentId: 1 },
//         { id: 2, branchId: 2, studentId: 2 },
//         { id: 3, branchId: 2, studentId: 1 },
//         { id: 4, branchId: 1, studentId: 3 }
//     ],
//     branch: [
//         { id: 1, name: "CSE" },
//         { id: 2, name: "IT" }
//     ],
//     student: [
//         { id: 1, name: "Jay" },
//         { id: 2, name: "Sanjay" },
//         { id: 3, name: "Rajesh" }
//     ]
// }
//const data = { username: 'example' };
//fetch('https://example.com/profile', {
//   method: 'POST', 
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });

async function fetchText() {
    let response = await fetch('http://localhost:3011/student');

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response();
        // handle data
    }
}

fetchText();