const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = 1000;
app.use(express.json({ limit: '1mb' }));

// node first 
const student = [
    { id: 1, name: "Jay" },
    { id: 2, name: "Sanjay" },
    { id: 3, name: "Rajesh" }
]


// console.log('student', student);

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
    console.log('hell');
    res.send('Hello j');
})

// Dynamic params
app.get('/:id', (req, res) => {
    res.send('Hello' + ' ' + req.params.id);
    console.log('hell2');
})

// POST URL Dynamic name
app.post('/hello', (req, res) => {
    // console.log({ "output": req.body.names });
    res.send({ "output": req.body.names });
})

//Student POST data
app.post('/student', (req, res) => {
    const body = req.body;
    console.log(studentDetails(body));
    // res.send(studentDetails(req.body));
    if (Object.keys(body).length == 0) return res.send('No data detected'), console.log('No data detected');

    if (body.branchStudents.length !== 0 && body.branches.length !== 0 && body.students.length !== 0) {
        res.send(studentDetails(body));
    }
    else {
        res.send('user not created');
    }
})
app.listen(port, () => { console.log('Listening') });