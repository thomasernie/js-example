const express = require('express')
const app = express()
//const bodyParser = require('body-parser');
const port = 1200;
app.get('/', (req,res) => {
    res.send('Hello Jay')
    //console.log('hello jay');
})
app.post('/',(req,res) => {
    //res.send(name:"jay")
    console.log('name:"jay"')
}
)
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
})
