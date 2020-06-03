/*first prgm
const express = require('express')
const app = express()
const port = 3000

app.get('/hello',(req,res)=>res.send('Hello FR8!'))

app.listen(port,()=>
console.log(`example app listening at http://localhost:${port}`))
*/

const express = require('express')
const app = express()
const port = 4448

app.get('/',(req,res)=>res.send(' hello fr8'))
app.get('/hello',(req,res)=>
{
    let name=req.query.name
     res.send('Hello'+name)
})

app.listen(port,()=>
console.log(`example app listening at http://localhost:${port}`))

