const Input = {
    branchStudent: [
        { id: 1, branchId: 10, studentId: 1 },
        { id: 2, branchId: 22, studentId: 2 },
        { id: 3, branchId: 22, studentId: 1 },
        { id: 4, branchId: 10, studentId: 3 }
    ],
    branch: [
        { id: 10, name: "CSE" },
        { id: 22, name: "IT" }
    ],
    student: [
        { id: 1, sName: "Jay" },
        { id: 2, sName: "Sanjay" },
        { id: 3, sName: "Rajesh" }
    ]
};
function studentDetails(data) {
    const branchStudent = data.branchStudent;
    const branch = data.branch;
    const student = data.student;

    let details = {};

    const branchStudentMap = branchStudent.map(obj => {

        const branch_data = branch.filter(val => {
            const branchName = obj.branchId === val.id;
            return branchName;
        });
        const [branchData] = branch_data;

        const students = student.filter(val => {
            const students = obj.studentId === val.id;
            return students;
        });
        const [studentName] = students;

        details = {
            id: obj.id,
            branchId: obj.branchId,
            branchName: branchData.name,
            studentId: obj.studentId,
            studentName: studentName.sName
        }
        return details;
    })
    console.log(branchStudentMap);
}
studentDetails(Input);