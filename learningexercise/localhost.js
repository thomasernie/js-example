const express = require('express');
const    app  = express();  
const PORT =  5000;
app.post('/',(req,res)=> {
    res.send('HELLO FR8');
});
app.listen(PORT, () => console.log(`server started on port ${PORT}`));