const Input = {
    branchStudent: [
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
        { id: 1, sName: "Jay" },
        { id: 2, sName: "Sanjay" },
        { id: 3, sName: "Rajesh" }
    ]
};

    const branchStudent = Input.branchStudent;
    const branches = Input.branches;
    const students = Input.students;

    const studentNameFinder = (studentId) =>
 { 
     const student =  students.find(student => student.id === studentId)
     return student.name;
 };
 const studentNameFinder = (studentId) =>students.find(student => student.id === studentId).name;

const branchStudentMapper = (branchStudent)  =>
{ 
    return {
        id:branchStudent.id,
        branchId:branchStudent.branchId,
        studentId: branchStudent.studentId,
        branchName: 'branhName',
        studentName: studentNameFinder(branchStudent.studentId)
    }
};

const branchStudentMap = branchStudentMapper({ id: 1, branchId: 1, studentId: 1 });

const branchStudentMaps = branchStudents.map(branchStudentMapper);

console.log(branchStudentMaps);


    