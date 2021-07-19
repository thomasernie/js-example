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
                // const studentName = branchDatas.studentId === student.id;
                 return studentName
             })?.sName,
         }
     })
     console.log(branchStudentMap);
 };


app.get('/',(req,res)=>{
    res.send('start');
})

app.post('/',(req,res) => 
req.body)
app.listen(port,() => console.log('Listening'));