
    var branchStudent=
    {
         id: 1, branchId: 1, studentId: 1 ,
         id: 2, branchId: 2, studentId: 2 ,
         id: 3, branchId: 2, studentId: 1 ,
         id: 4, branchId: 1, studentId: 3 
    }
    var branch=
    {
         id: 1, name: "CSE" ,
         id: 2, name: "IT" 
    }
    var student= 
    {
        id: 1, name: "Jay" ,
         id: 2, name: "Sanjay" ,
         id: 3, name: "Rajesh" 
    }    
   
let user=new Map()
 user.set('branchstudent',branchStudent)
 user.set('branch',branch)
 user.set('student',student)

 for(const branchId of user.values()) {
    console.log(branchId.branchStudent);
 }
