const input = {
    branchStudents: [
        {id: 1, branchId: 1, studentId: 1},
        {id: 2, branchId: 2, studentId: 2},
        {id: 3, branchId: 2, studentId: 1},
        {id: 4, branchId: 1, studentId: 3}
    ],
    branches: [
        {id: 1, name:'CSE'},
        {id: 2, name:'IT'}
    ],
    student: [
        {id: 1, name:'Jay'},
        {id: 2, name:'Sanjay'},
        {id: 3, name:'Rajesh'}
    ]
}
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
      console.log(studentMap(input))
    module.exports= (studentMap)
    //console.log(studentMap(input))
 //module.export={studentMap}
//console.log(JSON.stringify(studentMap));
//const tutorial = require('./tutorial')
console.log(JSON.stringify(studentMap))