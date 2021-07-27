const express = require('express')
const app =express();
const port =3000;

app.get("/", (req,res) => res.send("Hello FR8"))
app.listen(3000)
