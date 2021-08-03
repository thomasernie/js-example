 const express = require('express');                  //express is a module used for web framework 
 const app = express()                                //we assign a name to it
 const fetch = require('node-fetch')                  //node fetch module is used to fetch the url 
 bodyParser = require('body-parser');                 //body parser is an module or a middleware module .it is used to enter req body and get response body
    app.use(bodyParser.json());                       //we change it to json format
    const cityDatas = {                               // varaible declaration (cityDatas is an object)
        city:[                                        // array of elements
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
    }
    const options ={                                  //we assign options 
        method: "POST",                               //post request
        body: JSON.stringify(cityDatas),              //we convert the city data to string json 
        headers: {
        "Content-Type": "application/json"
      }}
    app.get('/api',async(request,response)=>{         //we use get method to get data from the server//async function used instead of promise  for easy code understanding 
        try{                                          // we create a try block to fetch from the server 
             const posts= await fetch('http://localhost:8989/api',options)  //await keyword used to wait and run until it fetches from server url,second arguments as options.
             const out = await posts.json();          //changes as json file
             response.send(out); 
           }
            catch (err){                              //we give catch blk instead try blk fails
             console.log("404 error")
            }
            })             
        
        app.listen(8999,() => console.log("the server started at http://localhost:8999")); 






        // app.get('/api',async(request,response)=>{
        // try{
        //      const posts = await fetch('http://localhost:8989/api',
        //       {
        //         method: "POST",
        //         body: JSON.stringify(cityDatas),
        //         headers: {
        //         "Content-Type": "application/json"
        //       }})
        //     }
        //        if(posts.ok === false){
        //        throw "page not found"
        //         }
        //     catch (err){
        //         console.log("404 error")
        //     }

        //       const out = await posts.json();
        //       response.send(out);
        //     })
            
        //     // if(posts.ok === false){
        //     //     throw "page not found" // this will go to catch (err).
                         
        
        // app.listen(8999,() => console.log("the server started at http://localhost:8999"));

