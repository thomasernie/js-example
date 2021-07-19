const express = require('express');
const app = express();
const port = 4000;

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
    console.log(branchStudentMap);
};


app.get('/', (req, res) => {
    res.send('Start');
});
app.post('/', (req, res) => {
    // console.log(req.body);
    studentDetails(req.body);
    res.send('created user');
})
app.listen(port, () => console.log("Listening"));