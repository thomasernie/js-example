const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = 4050;
let details;

app.use(express.json());

function studentDetails(data) {
    const branchStudent = data.branchStudents;
    const branches = data.branches;
    const students = data.students;
    const branchStudentMap = branchStudent.map(branchDatas => {
        return {
            ...branchDatas,
            branchName: branches.find(branch => {
                const branchName = branchDatas.branchId === branch.id;
                return branchName
            })?.name,
            studentName: students.find(student => {
                const studentName = branchDatas.studentId === student.id;
                return studentName
            })?.sName,
        }
    })
    return branchStudentMap;
};

fetch('http://localhost:4040')
    .then(data => data.json())
    .then(data => { return details = studentDetails(data) })
    .catch(error => assert.isNotOk(error, 'Promise Error'));

app.get('/', (req, res) => {
    res.send(details);
});

app.listen(port, () => console.log('Port one Listening'));
