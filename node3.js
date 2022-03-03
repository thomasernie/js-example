let input = {
    branchStudent: [{
     id: 1, branchId: 1, studentId: 1
    },
    {
     id: 2, branchId: 2, studentId: 2
    },
    {
     id: 3, branchId: 2, studentId: 1
    },
    {
     id: 5, branchId: 6, studentId: 1 //branch id mismatch student id need
    },
    {
     id: 6, branchId: 1, studentId: 6 //student id mismatch branch id need
    },
    {
     id: 7, branchId: 6, studentId: 6 //student id and branch id mismatch
    },
    {
     id: 4, branchId: 1, studentId: 3
    }],
   
    branch: [
     { id: 1, name: "CSE" },
     {
      id: 2, name: "IT"
     }
    ],
    student: [
     { id: 1, name: "Jay" },
     { id: 2, name: "Sanjay" },
     { id: 3, name: "Rajesh" }
    ]
   
   }
  
  //loop through brANCHsTUDENT
  //FOR EACH STUNDETiD FIND STUDET NAME IF EXIST ND ADD
  //
  //
   let branchStudentMap=[];
   input.branchStudent.map(bs => {
    let branch = input.branch.find((b) => bs.branchId === b.id)

    let student = input.student.find((std) => std.id === bs.studentId)
   // perfect_match !== undefined && 
   branchStudentMap.push({
        id: bs.id, branchId: bs.branchId, branchName: branch?.name, studentId: bs.studentId, studentName: student?.name
       })

    })

console.log(branchStudentMap)