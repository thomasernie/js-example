const express = require('express')
const app = express()
const port = 3000;
const fs = require('fs')

// create get end point
app.get('/hello', function(req,res) {
    var queryParameter = req.query;
    //console.log(queryParameter.name);
    res.json(`Hello${queryParameter.name}`);
});

// //create a post endpoint
// app.post('/hello',function (req,res){
//     const data = req.body.name;
//     console.log(data)
//     res.send(data)
// });

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
})
