
const input = {
    branchStudents: [
        {id: 1, branchId: 1, studentId: 1},
        {id: 2, branchId: 2, studentId: 2},
        {id: 3, branchId: 2, studentId: 1},
        {id: 4, branchId: 1, studentId: 3}
    ],
    branches: [
        {id: 1, name:'CSE'},
        {id: 2, name:'IT'}
    ],
    student: [
        {id: 1, name:'Jay'},
        {id: 2, name:'Sanjay'},
        {id: 3, name:'Rajesh'}
    ]
}


    const studentMap = (input) =>{
        branchStudentsMap = []
        const {branchStudents, branches, student} = input
        branchStudents.forEach(element => {
            branchStudentsMap.push({
                ...element,
                branchName : branches.filter((x)=>x.id == element.branchId)[0].name,
                studentName : student.filter((x)=>x.id == element.studentId)[0].name
            })
        });
        return branchStudentsMap
    }
    
    console.log(studentMap(input))
  
     module.exports = studentMap(input)  
        
    