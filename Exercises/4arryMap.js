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

const conncetedCityBranchMaps = [                                 // array of elements
        { id: 1, branchId:1,branch: "Chennai-HO" , connectedCityId: 1,connectedCity:"Chennai", name: "Chennai" },
        { id: 2,branchId:1, branch: "Chennai-HO" ,connectedCityId: 1,connectedCity:"Chennai", name: "K.K.Nagar" },
        { id: 3,branchId:1, branch: "Chennai-HO" ,connectedCityId: 3 ,connectedCity:"Sreperumbudur", name: "Sreperumbudur" },
        { id: 4,branchId:2,branch: "Coimbatore-Branch" , connectedCityId: 4,connectedCity:"Coimbatore",  name: "Coimbatore" },
        { id: 5,branchId:2,branch: "Coimbatore-Branch", connectedCityId: 4,connectedCity:"Coimbatore", name: "Palladam" },
        { id: 6,branchId:2,branch: "Coimbatore-Branch", connectedCityId: 4, connectedCity:"Coimbatore",name: "Ramandhapuram" }
    ];