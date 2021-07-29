

const express=require('express')

const app=express()
bodyParser = require('body-parser')
app.use(bodyParser.json());

port=3000

app.post('/student',(req,res)=>{
    const parameter=req.body
    console.log(parameter)


const branchDetails=parameter.branchStudent

const branchNameDetails=parameter.branch

const studentDetails=parameter.student

const branchMapper=branchDetails.map((branchStudents)=>{

    return{
        id:branchStudents.id,
        branchId:branchStudents.branchId,
        branchName:branchNameDetails.find(branch=>branch.id===branchStudents.branchId).name,
        studentId:branchStudents.studentId,
         studentName:studentDetails.find(student=>student.id===branchStudents.studentId).name
    }
})

console.log(branchMapper)
res.send(branchMapper)

})
app.listen(3000)
