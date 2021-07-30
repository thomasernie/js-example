    const express = require('express');//express is an module used to for web framewok
    const app = express(); //after importing express we assign a name to it
    bodyParser = require('body-parser');//body parser is an module or a middleware module .it is used to enter req body and get response body
    app.use(bodyParser.json());//we use this to get the file in json file
     const port = 9843;//we assing a port to our server
   
   function studentDetails(para){//put the data in a function called studentdetails
       const branchStudents=para.branchStudents;
       const branches=para.branches;
       const students=para.students;
       
       const branchName=(branchId) => branches.find(branchObj => branchObj.id ===branchId ).name
       const studentName=(studId)=>students.find(studentObj=>studentObj.id === studId).name
       const mappedBranchStudentName = (branchStudent)=> {
       return{
           id:branchStudent.id,
           branchId:branchStudent.branchId,
           branchname:branchName(branchStudent.branchId),
           studentId:branchStudent.studentId,
           studentname:studentName(branchStudent.studentId)
   
       }
   }
   const mappedBranchFinal = branchStudents.map(mappedBranchStudentName);//we assign a name and mapped them
   return mappedBranchFinal;
   };
   app.post('/student',function(req,res){//post methoud used to send the data to the server.when i need to send additional information inside the  body of the request.
       const details=req.body
       res.send(studentDetails(details))//here we create a call backfunction and use req.body and as response we get studentdetails as req body
   });

   app.listen(port, () => { console.log(`the server started at http://localhost:${port}`)})//here we use back ticks to the console log 