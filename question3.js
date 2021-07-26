const Input = {
    branchStudent: [
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
}
// Output: branchStudentMap:  [
//     { id: 1, branchId: 1, branchName: "CSE", studentId: 1, studentName: "Jay" },
//     { id: 2, branchId: 2, branchName: "IT", studentId: 2, studentName: "Sanjay" },
//     { id: 3, branchId: 2, branchName: "IT", studentId: 1, studentName: "Jay" },
//     { id: 4, branchId: 1, branchName: "CSE", studentId: 3, studentName: "Rajesh" }
// ]
// });
let a=Input.branchStudent;
let b=Input.branch;
let c=Input.student;

const start=a.map(starts => starts);
console.log(start);



