const input = {
    branchStudent: [
        { id: 1, branchid: 1, studentid: 1 },
        { id: 2, branchid: 2, studentid: 2 },
        { id: 3, branchid: 2, studentid: 1 },
        { id: 4, branchid: 1, studentid: 3 }
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
let branches = input.branch
let student = input.student
let branchStudentList = []
input.branchStudent.forEach(branchStudentItem => {
    branchStudentList.push({
        id: branchStudentItem.id,
        branchId: branchStudentItem.branchid,
        branchName: branches.find(list => branchStudentItem.branchid === list.id).name,
        studentId: branchStudentItem.studentid,
        studentName: student.find(student => student.id === branchStudentItem.studentid).name
    })
})

console.log("branchStudentMap",branchStudentList)