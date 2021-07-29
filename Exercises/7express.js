const express = require('express')
const app = express()
bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = 3000

// create get end point
// app.get('/hello', function(req,res) {
//     const queryParameter = req.query;
//     console.log(queryParameter.name);
//     res.send(`hello${queryParameter.name}`);
// });

//create a post endpoint
// app.post('/hello',function (req,res){
//    const postParameter = req.body
//    console.log(postParameter)
//    res.send(`hello${postParameter.name}`)
//  });

app.post('/student',function (req,res){
    const branchStudentMaps = req.body;
    res.send(branchStudentMaps)
});
     
// const branchStudents = studentDatas.branchStudents;
//     const branches = studentDatas.branches;
//     const students = studentDatas.students;
    
//     const branchNameFinder = (branchId) => branches.find(branch => branch.id === branchId).name;
    
//     const studentNameFinder = (studentId) => students.find(student => student.id === studentId).name;
    
//     const branchStudentMapper = (branchStudent)  =>
//     { 
//         return {
//             id:branchStudent.id,
//             branchId:branchStudent.branchId,
//             branchName: branchNameFinder(branchStudent.branchId),
//             studentId: branchStudent.studentId,
//             studentName: studentNameFinder(branchStudent.studentId)
//         }
//     };
//     const branchStudentMaps = branchStudents.map(branchStudentMapper);
    
//     console.log('branchStudentMap =', branchStudentMaps);
//     //res.end(JSON.stringify(branchStudentMaps)); 
   

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
})
