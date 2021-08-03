  
const express=require('express')
const app=express()
bodyParser = require('body-parser')
app.use(bodyParser.json())
app.listen(8989, () => console.log('listening at 8989'));

const gather =(gath)=>{     //we put this output in a function and assing a name  that it will execute when we call it
    const city=gath.city;
    const branches=gath.branches;
    const branchId=(branchid)=>branches.find(branch=> branch.id === branchid).name;
    const connectedCity=(connectedid)=>city.find(city=> city.id === connectedid).name;
    const connectedCityBranchMapper=(city)=>{
        return{
            id:city.id,
            branchId:city.branchId,
            branch:branchId(city.branchId),
            connectedCityId:city.connectedCityId,
            connectedCity:connectedCity(city.connectedCityId),
            name:city.name
        };
        
    }
    const output=city.map(connectedCityBranchMapper)
    return output
    }
app.post('/api',(request,response)=>{ // post methoud is used to add data or update to the server 
    const body= request.body;         //the data sent from client is stored in the request.body
    console.log(gather(body));        //we console.log the executed output

   response.send(gather(body))        //sending the output as the response to the client
})  
