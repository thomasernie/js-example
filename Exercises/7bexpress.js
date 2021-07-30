const fetch = require("node-fetch");
const studentDatas = {
    "branchStudents": [
        { "id": "1","branchId": "1", "studentId": "1" },
        { "id": "2","branchId": "2", "studentId": "2" },
        { "id": "3","branchId": "2", "studentId": "1" },
        { "id": "4","branchId": "1", "studentId": "3" }
    ],
    "branches": [
        { "id": "1", "name": "CSE" },
        { "id": "2", "name": "IT" }
    ],
    "students": [
        { "id": "1", "name": "Jay" },
        { "id": "2", "name": "Sanjay" },
        { "id": "3", "name": "Rajesh" }
    ]
}
fetch('http://localhost:3000/student')
.then(res => {
    if(res.status >=400){
        throw new Error("Bad response from server");
    }
    return res.json();
})
.then(user => {
    console.log(user);
})
.catch(err => {
    console.error(err);
})
