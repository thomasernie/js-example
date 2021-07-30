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
const branches=Input.branches;        //taking arrays out of the object
const students=Input.students;
//console.log("branchStudents",branchStudents);
//console.log("branches",branches);
const branchName=(branchId) => branches.find(branchObj => branchObj.id ===branchId ).name //making a function using arrow function keys,find to compare whether branch id is equal to branch name and dot vechu name get pandrom
const studentName=(studId)=>students.find(studentObj=>studentObj.id === studId).name //making a function using arrow function arrow function keysd ,find to compare  student id is equal to students name,equal ah irunrha name ah get pannum
const mappedBranchStudentName=(branchStudent)=> {
    return{
        id:branchStudent.id,
        branchId:branchStudent.branchId,
        branchname:branchName(branchStudent.branchId),
        studentId:branchStudent.studentId,
        studentname:studentName(branchStudent.studentId) //returining the above function and calling them

    }

}

const output=branchStudents.map(mappedBranchStudentName)//mapping gives us new array,this is the second step and we are adding elements of which we want.
console.log("output",output);