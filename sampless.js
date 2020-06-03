/*const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>res.send('FR8!'))
app.get('/hello',(req,res)=>res.send('Hello FR8!'))

app.listen(port,()=>
console.log(`example app listening at http://localhost:${port}/hello?=name=jay`))
*/

//output hello fr8
/*const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello FR8!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
*/
//trying post method
/*const express = require('express')
const app = express()
const port = 3000

app.post('/', function (req, res) {
  const name=
    res.send('hello jai')
  })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
*/


const express = require('express')
const app = express()
const port = 4444
app.post('/', function (req, res) {
  console.log("Got a POST request for the homepage");
  res.send('Hello POST');
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}/hello?&name=jay`))
)