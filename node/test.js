const express = require('express')

const app = express()

const port = 9999
app.use(express.json({ limit: '1mb' }));

app.get('/', (req, res) => {
    // const parameter = req.body
    // console.log(parameter)
    res.send("parameter")

})

app.post('/hello', (req, res) => {
    // const parameter = req.body
    console.log(req.body)
    res.send(req.body)

})

app.listen(port, () => console.log('Listening'));