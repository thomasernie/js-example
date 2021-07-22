const express = require('express');
const app = express();
const port = 3000;
const app1 = express();
const port1 = 4000;
let data;

app.use(express.json());
app1.use(express.json());


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

function nameList(data) {
    const names = data.map(names => {
        const studName = names.studentName;
        return studName;
    })
    console.log(names);
}



app.get('/', (req, res) => {
    res.send('Hello jay');
})

app.post('/user', (req, res) => {
    data = studentDetails(req.body);
    res.send('out');
})


app1.get('/', (req, res) => {
    res.send('second port');
})

app1.post('/', (req, res) => {
    req.body = data;
    nameList(req.body);
    res.send(req.body);
})

app.listen(port, () => console.log('Port one Listening'));
app1.listen(port1, () => console.log('Port two Listening'));
