const express = require('express')
const app = express()
const port = 3000
bodyParser = require('body-parser')
app.use(bodyParser.json())

app.post('/hello', (req, res) => {

  const result = req.body.name;
  res.send(`Hello ${result}`)
})

app.listen(port, () => {
  console.log(`Listening at Port:${port}`)
})
























