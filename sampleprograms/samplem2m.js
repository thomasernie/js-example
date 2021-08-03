const express = require('express')

const app = express()

bodyParser = require('body-parser')

app.use(bodyParser.json());

const port = 6000;

function cityCollection(cityDetails)
{

     const city = cityDetails.city;
     const branches = cityDetails.branches;

     const branchesFinder =(branchId) => branches.find(branch => branch.id === branchId).name
     const cityFinder =(connectedId) =>city.find(city => city.id === connectedId).name

     const connectedCityBranchMapper = (cities)  =>
    { 
    return {
        id:cities.id,
        branchId:cities.branchId,
        branch:branchesFinder(cities.branchId),
        connectedCityId:cities.connectedCityId,
        connectedCity:cityFinder(cities.connectedCityId),
        name:cities.name

   }
};

const connectedCityBranchMaps = city.map(connectedCityBranchMapper);


console.log(connectedCityBranchMaps);

};
app.post('/hello',function(req,res) {
  
    const Input = req.body;
    console.log(req.body);
    //res.send(output);
    res.send(cityCollection(Input))

});
   app.listen(port,() => {
           console.log(`app listening at http://localhost:${port}`);
   
 })



// const cityDatas = {                                  // varaible declaration (studentData is an object)
//     city:[                                 // array of elements
//         { id: 1, branchId:1, connectedCityId: 1, name: "Chennai" },
//         { id: 2,branchId:1, connectedCityId: 1, name: "K.K.Nagar" },
//         { id: 3,branchId:1, connectedCityId: 3, name: "Sreperumbudur" },
//         { id: 4,branchId:2, connectedCityId: 4, name: "Coimbatore" },
//         { id: 5,branchId:2, connectedCityId: 4, name: "Palladam" },
//         { id: 6,branchId:2, connectedCityId: 4, name: "Ramandhapuram" }
//     ],
//     branches: [
//         { id: 1, name: "Chennai-HO" },
//         { id: 2, name: "Coimbatore-Branch" }
//     ]
// };
