const studentDatas = {                                  // varaible declaration (studentData is an object)
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

// const branchStudentMaps =  [
//     { id: 1, branchId: 1, branchName: "CSE", studentId: 1, studentName: "Jay" },
//     { id: 2, branchId: 2, branchName: "IT", studentId: 2, studentName: "Sanjay" },
//     { id: 3, branchId: 2, branchName: "IT", studentId: 1, studentName: "Jay" },
//     { id: 4, branchId: 1, branchName: "CSE", studentId: 3, studentName: "Rajesh" }
// ];

// Basics of Map, Filter, Find

// map = input array , length = output array , lenghth
// filter => 1) input array = output array 2) output length <= input filter

const branchStudents = studentDatas.branchStudents;
const branches = studentDatas.branches;
const students = studentDatas.students;

//const [branchStudents,branches,students] = studentDatas;
//console.log(branchStudents);
// const studentNameFinder = (studentId) =>
//  {
//     const student =  students.find(student => student.id === studentId)
//     return student.name;
// };

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
// function (student) 
//{ 
//    return {student.name === 'Jay' } 
//}
// student => student.name === 'Jay'

//const filtredStudents = students.find(student => student.name === 'Jay' )
//const student = students.find(student => student.name === 'Jay' )
//



// const studentName = 

// console.log("studentName", studentName);
// const ids = branchStudents.map(branchStudentMapper)

// console.log(ids);
// const branchDetails = studentData.branch.find(function(data){
//         return data;              
//     }
//     );
 
// const studentDetails = studentData.student.find(function(data){
//     return data;
// })

// const details = studentDatas.branchStudents.map(function(data){
//  return {                                        
//         id:data.id, 
//         branchId:data.branchId,
//         branchName:branchDetails.name, 
//         studentId:data.studentId,
//         studentName:studentDetails.name,
//      };
//  })

//  const branchStudentMaper = function(data){
//     return {                                        
//            id:data.id, 
//            branchId:data.branchId,
//            branchName:branchDetails.name, 
//            studentId:data.studentId,
//            studentName:studentDetails.name,
//         };
//     }
// //  console.log('branch: ',branchDetails); 
// //  console.log('student: ',studentDetails)
// console.log('branchstudentMap: ', details);