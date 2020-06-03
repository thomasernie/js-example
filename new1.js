
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/',function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
//const shilpa= require('./shilpa')
//console.log(JSON.stringify(shilpa.branchStudentMap));
const studentMap=function addingBranchStudentDetails(input)
{
    const {branchStudents,branches,student}=input
    const output =branchStudents.map(branchStudents)
    {return{

        "id": branchStudents.id,
        "branchId": branchStudents.branchId,
        "branchName": branches.find(branches => branches.id === branchStudents.branchId).name,
        "studentId": branchStudents.studentId,
        "studentName" : student.find(student => student.id === branchStudents.studentId).name 

}}
      
      return output }

app.post('/convert',function (req, res) {
  //res.setHeader('Content-Type', 'text/plain')
  const input=req.body
  let branchStudentMap = [];
console.log('input',input)
input.branchStudent.forEach(st => {
    branchStudentMap.push({
        "id": st.id,
        "branchId": st.branchId,
        "branchName": input.branch.find(branch => branch.id === st.branchId)?input.branch.find(branch => branch.id === st.branchId).name :null,
        "studentId": st.studentId,
        "studentName" : input.student.find(student => student.id === st.studentId)?input.student.find(student => student.id === st.studentId).name :null
    })
})

  res.send(branchStudentMap)
  res.end(JSON.stringify(req.body, null, 2))
})
app.listen(3232,()=>
console.log(`example app listening at http://localhost:${3232}`))