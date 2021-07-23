const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = 3000;

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
let details;
async function dataTrans() {
    const inputData = await fetch('http://localhost:4000');
    const datas = await inputData.json();
    return datas;
}
dataTrans()
    .then(data => data)
    .then(res => { details = (studentDetails(res)) })
    .catch(err => err);

app.get('/', (req, res) => {
    console.log(details);
    res.send(details);
});

app.listen(port, () => console.log('Port one Listening'));
