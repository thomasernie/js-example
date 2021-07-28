// const express = require('express')

// const app = express()

// const port = 3000

// app.get('/read-users', (req, res) => res.send("list of users"))

// app.listen(port, () => console.log("server is running"))

const express=require('express')

const app=express()

const port=3000

app.get('/hello',(req,res)=> {
    const data = req.query
    console.log(data.name)
    res.send(`Hello${data.name}`)
})

app.listen(3000)
