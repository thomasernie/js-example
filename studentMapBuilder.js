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

const studentMapBuilder = function  (input){
   let branchStudentMap = [];
    input.branchStudent.forEach(st => {
        branchStudentMap.push({
            "id": st.id,
            "branchId": st.branchId,
            "branchName": input.branch.find(branch => branch.id === st.branchId)?input.branch.find(branch => branch.id === st.branchId).name :null,
            "studentId": st.studentId,
            "studentName" : input.student.find(student => student.id === st.studentId)?input.student.find(student => student.id === st.studentId).name :null
            
            
        })
      })
    //console.log(JSON.stringify(branchStudentMap));
    return branchStudentMap 
}
    console.log(studentMapBuilder(input))
    module.exports = studentMapBuilder
