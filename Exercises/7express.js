const express = require('express')
const app = express()
const port = 1200;
app.get('/', (req,res) => {
    res.send('Hello Jay')
})
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
})
