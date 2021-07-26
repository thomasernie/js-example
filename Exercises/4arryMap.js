const cityDatas = {                                  
    cities:[                                 
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
const cities = cityDatas.cities;
const branches = cityDatas.branches;

const branchName = branchId => branches.find(branch => branch.id === branchId).name;
const connectedCity = connectedId => cities.find(city => city.id === connectedId).name;
//console.log(cityName)

const branchCityMapper = (cities)  =>
{ 
    return {
        id:cities.id,
        branchId:cities.branchId,
        branch:branchName(cities.branchId),
        connectedCityId:cities.connectedCityId,
        connectedCity:connectedCity(cities.connectedCityId),
        name:cities.name
    }
};

const branchCityMaps = cities.map(branchCityMapper);
console.log('conncetedCityBranchMaps  =', branchCityMaps);


//console.log('connectedCityBranchMaps :', branchCityMapper)
// const conncetedCityBranchMaps = [                                 // array of elements
//         { id: 1, branchId:1,branch: "Chennai-HO" , connectedCityId: 1,connectedCity:"Chennai", name: "Chennai" },
//         { id: 2,branchId:1, branch: "Chennai-HO" ,connectedCityId: 1,connectedCity:"Chennai", name: "K.K.Nagar" },
//         { id: 3,branchId:1, branch: "Chennai-HO" ,connectedCityId: 3 ,connectedCity:"Sreperumbudur", name: "Sreperumbudur" },
//         { id: 4,branchId:2,branch: "Coimbatore-Branch" , connectedCityId: 4,connectedCity:"Coimbatore",  name: "Coimbatore" },
//         { id: 5,branchId:2,branch: "Coimbatore-Branch", connectedCityId: 4,connectedCity:"Coimbatore", name: "Palladam" },
//         { id: 6,branchId:2,branch: "Coimbatore-Branch", connectedCityId: 4, connectedCity:"Coimbatore",name: "Ramandhapuram" }
//     ];