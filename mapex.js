
const input = {
    branchStudent: [
        {id: 1, branchId: 1, studentId: 1},
        {id: 2, branchId: 2, studentId: 2},
        {id: 3, branchId: 2, studentId: 1},
        {id: 4, branchId: 1, studentId: 3}
    ],
    branch: [
        {id: 1, name:'CSE'},
        {id: 2, name:'IT'}
    ],
    student: [
        {id: 1, name:'Jay'},
        {id: 2, name:'Sanjay'},
        {id: 3, name:'Rajesh'}
    ]
}

//console.log(input);
const studentMap = function addingBranchStudentDetails(input)
{
const {branchStudent,branch,student} = input
input.branchStudent.forEach(st => {
    branchStudentMap.push
const output = branchStudent.map(branchStudent)
{return {
    "id": branchStudent.id,
    "branchId": branchStudent.branchId,
    "branchName": input.branch.find(branch => branch.id === st.branchId)?input.branch.find(branch => branch.id === st.branchId).name :null,
    "studentId": branchStudent.studentId, 
    "studentName" :input.student.find(student => student.id === st.studentId)?input.student.find(student => student.id === st.studentId).name :null
}
return branchStudentMap() }
module.exports = studentMap(branchStudent)
console.log(studentMap(branchStudent))
})
//console.log(input);
//}
/*
let branchStudentMap = [];
input.branchStudent.forEach(st => {
    branchStudentMap.push({
        "id": branchStudent.id,
        "branchId": branchStudent.branchId,
        "branchName": input.branch.find(branch => branch.id === st.branchId)?input.branch.find(branch => branch.id === st.branchId).name :null,
        "studentId": st.studentId,
        "studentName" :input.student.find(student => student.id === st.studentId)?input.student.find(student => student.id === st.studentId).name :null 
    })
*/
//module.exports = {branchStudent}
//console.log(input);
// console.log(JSON.stringify(branchstudent));
}
