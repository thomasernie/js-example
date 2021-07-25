const fetch = require('node-fetch');
const express = require('express');
const routes = express.Router();

const data = { "names": "nithish" };
const options = {
    method: "POST",
    mode: 'cors',
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify(data)
};

routes.get('/', async (req, res) => {

    const resp = await fetch('http://localhost:1000/hello', options);
    const nameData = await resp.json();
    console.log(nameData);
    res.send(nameData);

})

module.exports = routes;