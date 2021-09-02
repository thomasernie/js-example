Input = {
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

const branchStudentMapper = (branchStudent) => {

    return {
        ...branchStudent,
        branchName: Input.branch.find(branch => branch.id === branchStudent.branchId).name,
        studentName: Input.student.find(student => student.id === branchStudent.studentId).name
    }
}

const Result = Input.branchStudent.map(branchStudentMapper) ;

console.log("branchStudentMap:", Result)