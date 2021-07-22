const student1 = {
    branchStudent:[
        { id: 1, branchId: 1, studentId: 1 },
        { id: 2, branchId: 2, studentId: 2 },
        { id: 3, branchId: 2, studentId: 1 },
        { id: 4, branchId: 1, studentId: 3 }
    ],
    branch: [
        { id: 1, name: "CSE" },
        { id: 2, name: "IT" }
    ],
    student: [
        { id: 1, name: "Jay" },
        { id: 2, name: "Sanjay" },
        { id: 3, name: "Rajesh" }
    ]
}; 
const sort = function compare(branchStudent,branch){
    return branchstudent.data - branch.datas;
}
console.log(sort)

//const names = users.map(user => user.name)
// console.log(student);

// const details = {
//     id: 1,
//     name: 'dhanalakshmi'
// };

// details.id
 console.log(student1.branch)
 console.log(student1.student)
const maped = student1.branchStudent.map(function(data){
    const branchName = student1.branch.find(function(datas){
    const studentName = student1.student.find(function(data1){
        return data1.id === data1.studentId;
    })
        return datas.id === data.branchId;
    }
    )

    return branchName ;
   return {
       id:data.id,
       branchId:data.branchId,
       studentId:data.studentId
    };
})
 console.log(maped);

// console.log(student1)
 // const num = [1,2,3]
// const data = num.map(function(datas){
//    return datas * 23;
// } )
// console.log(data);