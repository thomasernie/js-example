const bodyParser = require('body-parser');
const express = require('express');
const    app  = express();
const cityDatas = {                                  // varaible declaration (studentData is an object)
    city:[                                 // array of elements
        { id: 1, branchId:1, connectedCityId: 1, name: "Chennai" },
        { id: 2,branchId:1, connectedCityId: 1, name: "K.K.Nagar" },
        { id: 3,branchId:1, connectedCityId: 3, name: "Sreperumbudur" },
        { id: 4,branchId:2, connectedCityId: 4, name: "Coimbatore" },
        { id: 5,branchId:2, connectedCityId: 4, name: "Palladam" },
        { id: 6,branchId:2, connectedCityId: 4, name: "Ramandhapuram" }
    ],
    branches: [
        { id: 1, name: "Chennai-HO" },
        { id: 2, name: "Coimbatore-Branch" }
    ],
};
const gather =(gath)=>{
const city=cityDatas.city;
const branches=cityDatas.branches;
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
}
const data = gather;
const options={
    methoud:'POST',
    headers:{
         'content-type': 'application/json'
    },
    body:JSON.stringify(data)
};
fetch('/api',options);
