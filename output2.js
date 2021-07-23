// const Input = 
//     [
//         { id: 1, branchId: 1, studentId: 1 },
//         { id: 2, branchId: 2, studentId: 2 },
//         { id: 3, branchId: 2, studentId: 1 },
//         { id: 4, branchId: 1, studentId: 3 }
//     ]
     
// map
    // let  final= Input.map((data)=>{
    //     return(data.id)
    // })

    // console.log(final)

    // let final= Input.map((data)=>{
    //     return(data.studentId)
    // })

    // console.log("studenttId:",final)

//forEach

//  const    Input = 
//          [
//             { id: 1, branchId: 1, studentId: 1 },
//             { id: 2, branchId: 2, studentId: 2 },
//             { id: 3, branchId: 2, studentId: 1 },
//             { id: 4, branchId: 1, studentId: 3 }
//         ]

// Input.forEach(function(data){

//     console.log("studentId",data.studentId,)
    
// })



const  Input = {
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

let start=Input.branchStudent
let names=Input.branch
let studen=Input.student




let final=start.map((val)=>{
    return(val.branchId)
})
  console.log(final)