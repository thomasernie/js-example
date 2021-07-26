const data = [{id:1,branch_id:2,name:'sathish'},
{id:2,branch_id:3,name:'Vijay'}]

const mapped_data = data.map((_data)=>{
console.log('_data',_data)
return{
    id:_data.id,
    student_name:_data.name
}
})

console.log('mapped',mapped_data)