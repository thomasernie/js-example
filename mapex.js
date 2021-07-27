const Input = {
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
};
//array is an object that can store multiple elements([])
//object is an unordered collection of related data types,in the form of "key:value" pairs inside the brackets 
//array of objects
   
   //console.log(Input.branchStudent);

   //const branchStudent = Input.branchStudent;
   //const branch = Input.branch;
   //const student = Input.student;

   //Array.find()function- returns only one object

//iterate
//map function- applies a function over every element and then returns the new array.
 
let datas = Input.branchStudent.map(function(value){
     
    return {
         id:value.id,
         branchId:value.branchId,
         branchName:branchDatas.name,
         studentId:value.studentId,
         studentName:studentDatas.name,
     };
 })
 console.log('branchStudentMap:',datas);
 
 





 



