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
app.post('/user', (req, res) => {
    const body = req.body;
    // console.log(body);
    if (Object.keys(body).length == 0) return res.send('No data detected'), console.log('No data detected');

    if (body.branchStudents.length !== 0 && body.branches.length !== 0 && body.students.length !== 0) {
        studentDetails(body);
        res.send('user created');
    }
    else {
        console.log('Student Input datas are requied');
        res.send('user not created');
    }
})
app.listen(port, () => console.log("Listening"));