const express = require('express')

const app = express()

bodyParser = require('body-parser')

app.use(bodyParser.json());//JSON.parse() method takes a string as input and transforms it into an object.
// Parses the text as JSON and exposes the resulting object on req.body.

//const port = 7667

//app.use(express.json());

const port = 3000;

function studentCollections(studentDetails){
 
    const branchStudents = studentDetails.branchStudents;
    const branches = studentDetails.branches;
    const students = studentDetails.students;


const studentNameFinder = (studentId) => students.find(student => student.id === studentId).name
  const branchNameFinder=(branchId) => branches.find(branch=> branch.id === branchId).name

const branchStudentMapper = (branchStudent)  =>
 { 
    return {
        id:branchStudent.id,
        branchId:branchStudent.branchId,
        branchName:branchNameFinder(branchStudent.branchId),
        studentId:branchStudent.studentId,
        studentName: studentNameFinder(branchStudent.studentId)
    }
 };

const branchStudentMaps = branchStudents.map(branchStudentMapper);
return branchStudentMaps;

};

  app.post('/student',function(req,res) {
  
    const output = req.body;
    console.log(req.body);
    //res.send(output);
    res.send(studentCollections(output))

});
   app.listen(port,() => {
           console.log(`app listening at https://localhost:${port}`);
   
 })