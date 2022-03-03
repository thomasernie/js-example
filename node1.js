let students=[
    {id:1, name:"Jay"},
    { id: 2, name: "Sanjay" },
    { id: 3, name: "Rajesh" }
]
/*
{
    console.log("student:");

    console.log(students);
    
    
}*/
let student=[];
students.map(m=>{
    student.push({
    id: m.id , name: m.name
    })
})
console.log("student:" ,student)
//console.log(student)



