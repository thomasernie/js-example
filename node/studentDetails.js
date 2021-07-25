const express = require('express');
const app = express();
const port = 2020;
app.use(express.json());
function studentDetails(data) {
    const branchStudent = data.branchStudent;
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
    res.send('Datas');
})

app.post('/data', (req, res) => {
    console.log(req.body);
    res.send(studentDetails(req.body));
})

app.listen(port, () => {
    console.log(`Listening ${port}`);
})