const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello j');
})
app.get('/:id', (req, res) => {
    res.send('Hello' + ' ' + req.params.id);
})

app.listen(port, () => { console.log('Listening') });