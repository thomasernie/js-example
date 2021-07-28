const express = require('express');
const    app  = express();  
const PORT =  6060;
app.get('/',(req,res)=> {
    res.send('HELLO FR8');
});
app.get('/:name',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params);
});
app.listen(PORT, () => console.log(`server started on port ${PORT}`));