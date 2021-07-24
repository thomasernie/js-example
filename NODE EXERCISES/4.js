const studentdata = {                                  // varaible declaration (student1 is an object)
    branchStudent:[                                 // array of elements
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
 
const testMap = studentdata.branchStudent(function(data){
    return {                                         // fetches the data from branch and student array and forms an array
        id:data.id, 
        branchId:data.branchId,
        branchName:branch.name, 
        studentId:data.studentId,
        studentName:studentName.name,
     };
 })
 
  console.log('branchstudentMap: ',maped);
})