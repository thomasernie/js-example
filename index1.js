//the given example is done using map() method 
/*"why map() method" --> in the given example student1 is a parent array, which creates another array using map().
*/
const student1 = {                                  // varaible declaration (student1 is an object)
    branchStudent:[                                 // array of elements
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

const maped = student1.branchStudent.map(function(data){    // declaring varaible as maped - objectname.propertyname - function (parameter)
    
    const branch = student1.branch.find(function(datas)   //declared branchname - finding datas(branchname, branchid) from parent array student1
    {
        return datas.id = data.branchId;              // fetches data from branch
    }
    );
    const studentName = student1.student.find(function(data1)  // declare studentname - find from student array element
    {
        return data1.id === data.studentId;         //fetches data from student
    });
   return {                                         // fetches the data from branch and student array and forms an array
       id:data.id, 
       branchId:data.branchId,
       branchName:branch.name, 
       studentId:data.studentId,
       studentName:studentName.name,
    };
})

 console.log('branchstudentMap: ',maped);       // prints the output
console.log(student1.branch)
// console.log(student1.student)
