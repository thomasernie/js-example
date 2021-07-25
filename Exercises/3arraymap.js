const studentData = {                                  // varaible declaration (studentData is an object)
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
const branchDetails = studentData.branch.map(function(data){
        return data;              
    }
    );
 
const studentDetails = studentData.student.find(function(data){
    return data;
})

const details = studentData.branchStudent.map(function(data){
 return {                                        
        id:data.id, 
        branchId:data.branchId,
        branchName:branchDetails.name, 
        studentId:data.studentId,
        studentName:studentDetails.name,
     };
 })

//  console.log('branch: ',branchDetails); 
//  console.log('student: ',studentDetails)
console.log('branchstudentMap: ', details);