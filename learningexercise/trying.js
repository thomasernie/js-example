const Input = {                                  // varaible declaration (studentData is an object)
    branchStudents:[                                 // array of elements
        { id: 1, branchId: 1, studentId: 1 },
        { id: 2, branchId: 2, studentId: 2 },
        { id: 3, branchId: 2, studentId: 1 },
        { id: 4, branchId: 1, studentId: 3 }
    ],
    branches: [
        { id: 1, name: "CSE" },
        { id: 2, name: "IT" }
    ],
    students: [
        { id: 1, name: "Jay" },
        { id: 2, name: "Sanjay" },
        { id: 3, name: "Rajesh" }
    ]
};

//output
// const branchStudentMaps =  [
//     { id: 1, branchId: 1, branchName: "CSE", studentId: 1, studentName: "Jay" },
//     { id: 2, branchId: 2, branchName: "IT", studentId: 2, studentName: "Sanjay" },
//     { id: 3, branchId: 2, branchName: "IT", studentId: 1, studentName: "Jay" },
//     { id: 4, branchId: 1, branchName: "CSE", studentId: 3, studentName: "Rajesh" }
// ];
const branchStudents=Input.branchStudents;
const branches=Input.branches;
const students=Input.students;
//console.log("branchStudents",branchStudents);
//console.log("branches",branches);
const branchName=(branchId) => branches.find(obj => obj.id ===branchId ).name
const studentName=(studId)=>students.find(obj=>obj.id === studId).name
const output=(branchStudent)=> {
    return{
        id:branchStudent.id,
        branchId:branchStudent.branchId,
        branchname:branchName(branchStudent.branchId),
        studentId:branchStudent.studentId,
        studentname:studentName(branchStudent.studentId)

    }
    
}

const frist=branchStudents.map(output)
console.log("frist",frist);