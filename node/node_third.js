const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');
const student = require('./func');


const fileIn = fs.readFileSync('./input.json', 'utf-8');
const dataObj = JSON.parse(fileIn);



// studentDetails(dataObj)
// const output = ;



app.get('/', (req, res) => {
    // const output = studentDetails(Input);
    const output = student(dataObj);
    res.send(output);

})

app.listen(port, () => console.log('Listening'));
