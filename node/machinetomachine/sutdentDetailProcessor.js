// fix this
const express = require('express');
const app = express();
const port = 3000;

let data;

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




app.get('/', (req, res) => {
    res.send('Hello jay');
})

app.post('/user', (req, res) => {
    data = studentDetails(req.body);
    res.send('out');
})



app.listen(port, () => console.log('Port one Listening'));
