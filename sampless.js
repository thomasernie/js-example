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
app.listen(4000, () => console.log(`Example app listening at http://localhost:${4000}/hello?&name=jay`))
})
/*
{"branchStudent": [ {"id": 1, "branchId": 1, "studentId": 1},{"id": 2, "branchId": 2, "studentId": 2}, {"id": 3, "branchId": 2," studentId": 1},{"id": 4, "branchId": 1, "studentId": 3}],
    "branch":[ {"id": 1, "name":"CSE"},{"id": 2, "name":"IT"}],
    "student": [{"id": 1, "name":"Jay"},{"id": 2, "name":"Sanjay"},{"id": 3, "name":"Rajesh"}]
    }
    */