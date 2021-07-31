const express = require('express')
const app = express()
bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = 3001

// // To get Hello Jay
// app.get('/hello', function(req,res) {
//     const queryParameter = req.query;
//     console.log(queryParameter.name);
//     res.send(`hello${queryParameter.name}`);
// });

// // To post Hello Jay
// app.post('/hello',function (req,res){
//    const postParameter = req.body
//    console.log(postParameter)
//    res.send(`{Output:hello${postParameter.name}}`)
//  });

// To post Student
function studentInfo(studentDatas){
const branchStudents = studentDatas.branchStudent;
    const branches = studentDatas.branch;
    const students = studentDatas.student;
    
    const branchNameFinder = (branchId) => branches.find(branch => branch.id === branchId).name;
    
    const studentNameFinder = (studentId) => students.find(student => student.id === studentId).name;
    
    const branchStudentMapper = (branchStudents)  => 
    { 
        return {
            id:branchStudents.id,
            branchId:branchStudents.branchId,
            branchName: branchNameFinder(branchStudents.branchId),
            studentId: branchStudents.studentId,
            studentName: studentNameFinder(branchStudents.studentId)
        }
    }
    const branchStudentMaps = branchStudents.map(branchStudentMapper);
    return branchStudentMaps;
    
};

app.post('/student', function (req,res){
    const input = req.body
    console.log(input)
    res.send(  studentInfo(input))
    //console.log('{branchStudentMap${res.send}}')
});
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})

