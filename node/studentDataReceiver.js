const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = 3000;
let datas;
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


async function stu() {
    const output = await fetch('http://localhost:4040')
    return output;
}

const data = stu()
    .then(data => data.json())
    .then(dat => {
        console.log(dat);
        return datas = studentDetails(dat)
    })
    .catch(err => console.log(err, "error"));

app.get('/', (req, res) => {
    res.send(datas);
})
