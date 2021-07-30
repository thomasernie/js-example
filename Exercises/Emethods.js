const express = require('express')
const app = express()
const port = 3000

//to get 
// app.get('/hello', function(req,res) {
//     const queryParameter = req.query;
//     console.log(queryParameter.name);
//     res.send(`hello${queryParameter.name}`);
// });

// //to put
// app.put('/hello', function(req,res) {
//     const queryParameter = req.query;
//     console.log(queryParameter.name);
//     res.send(`hello${queryParameter.name}`);
// });

// //to post 
// app.post('/hello', function(req,res) {
//     const queryParameter = req.query;
//     console.log(queryParameter.name);
//     res.send(`hello${queryParameter.name}`);
// });

// //to delete
// app.delete('/hello', function(req,res) {
//     const queryParameter = req.query;
//     console.log(queryParameter.name);
//     res.send(`hello${queryParameter.name}`);
// });

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})