// const express = require('express')

// const app = express()

// const port = 3000

// app.get('/read-users', (req, res) => res.send("list of users"))

// app.listen(port, () => console.log("server is running"))

const express=require('express')

const app=express()

const port=3000

app.get('/hello',(req,res)=> res.send("jay"))

app.listen(3000)
