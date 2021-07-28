const express=require('express')

const app=express()
bodyParser = require('body-parser')
app.use(bodyParser.json());


const port=3000

app.post('/hello',(req,res)=>{
    const parameter=req.body
    console.log(parameter)
res.send(parameter)

})

app.listen(3000)