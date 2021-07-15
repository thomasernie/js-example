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
    const branchStudents = data.branchStudents;
    const branches = data.branches;
    const students = data.students;

    let details = {};

    const branchStudentMap = branchStudents.map(branchStudent => {
        return {
            ...branchStudent,
            branchName: branches.find(branch => branch.id === branchStudent.branchId)?.name,
            studentName: students.find(student => student.id === branchStudent.studentId)?.sName,
        }
        
    })
    console.log(branchStudentMap);
}
studentDetails(Input);

//TO-DO do the above with map and filter 