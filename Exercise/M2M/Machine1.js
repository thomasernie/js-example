import express from 'express';
import * as fetch from 'node-fetch';
const app = express();
const port = 3001;

const data = {
    method: "POST",
    headers: {
        "Content-Type": 'application/json'
    },
}
app.get('/', async (req, res) => {
    const response = await fetch('http://localhost:3002/data', data);
    const studentDetails = response.json();
    res.send(studentDetails);
});

app.listen(port, () => {
    console.log(`Listening at port: ${port}`);
})