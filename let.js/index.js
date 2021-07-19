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

function studentDetails(data) {

    const branchStudent = data.branchStudents;
    const branches = data.branches;
    const students = data.students;
    const branchStudentMap = branchStudent.map(branchDatas => {
        return {
            ...branchDatas,
            branchName: branches.find(branch => {
                const branchName = branchDatas.branchId === branch.id;
                return branchName
            })?.name,
            studentName: students.find(student => {
                const studentName = branchDatas.studentId === student.id;
                return studentName
            })?.sName,
        }
    })
    console.log(branchStudentMap);
};
module.exports = studentDetails;