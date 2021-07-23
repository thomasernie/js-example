const fetch = require("node-fetch")
const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

// Send data
// Get data
// Print data

app.get('/', (req, res) => {

    async function response(data) {
        const input = fetch('http://localhost:1030');
        return input;
    }
    response()
        .then(data => data.json())
        .then(data => console.log(data));
    res.send('Hello students');
})

app.listen(port, () => console.log('Port 2 Listening'));
