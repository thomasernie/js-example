const express = require('express');
const app = express();
const port = 8000;


app.get('/:id', (req, res) => {
    res.send('Hello' + ' ' + req.params.id);
})

app.listen(port, () => { console.log('Listening') });

