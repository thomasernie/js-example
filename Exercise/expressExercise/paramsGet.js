const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {

    const result = req.query.name
    res.send(`Hello ${result}`)
})

app.listen(port, () => {
  console.log(`Listening at Port:${port}`)
})