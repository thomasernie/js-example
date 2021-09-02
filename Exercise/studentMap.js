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

const Result = Input.branchStudent.map((branchStudentMapper) => {

    return {
        id: branchStudentMapper.id,
        branchId: branchStudentMapper.branchId,
        branchName: Input.branch.find(branch => branch.id === branchStudentMapper.branchId).name,
        studentId: branchStudentMapper.studentId,
        studentName: Input.student.find(student => student.id === branchStudentMapper.studentId).name
    }
})

console.log("branchStudentMap:", Result)