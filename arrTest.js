const Input = {
    branchStudents: [
        { id: 1, branchId: 10, studentId: 1 },
        { id: 2, branchId: 22, studentId: 2 },
        { id: 3, branchId: 22, studentId: 1 },
        { id: 4, branchId: 33, studentId: 3 }
    ],
    branches: [
        { id: 10, name: "CSE" },
        { id: 22, name: "IT" }
    ],
    students: [
        { id: 1, sName: "Jay" },
        { id: 2, sName: "Sanjay" },
        { id: 3, sName: "Rajesh" }
    ]
};
function studentDetails(data) {
    const branchStudent = data.branchStudent;
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
}
studentDetails(Input);

//TO-DO do the above with map and filter