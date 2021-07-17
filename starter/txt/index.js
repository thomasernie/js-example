const http = require('http');
const url = require('url');
const fs = require('fs');

const overview = fs.readFileSync('../templates/template-overview.html', 'utf-8');
const product = fs.readFileSync('../templates/template-product.html', 'utf-8');
const card = fs.readFileSync('../templates/template-card.html', 'utf-8');

const data = fs.readFileSync('../dev-data/data.json', 'utf-8');
const dataObj = JSON.parse(data);
const replaceTemp = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName)
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%ID%}/g, product.id);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);

    if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    return output;
}

//Server
const server = http.createServer((req, res) => {
    const serverPath = req.url;

    if (serverPath === '/' || serverPath === '/overview') {
        const cardEle = dataObj.map(el => replaceTemp(card, el));
        const output = overview.replace('{%PLACEHOLDER%}', cardEle);
        res.end(output);
    }
    else if (serverPath === '/product') {
        res.end('This is the product');
    }
    else if (serverPath === '/api') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(data);
    }
    else {
        res.writeHead(404, {
            'content-type': 'text/html'
        })
        res.end('<h1> Page not found </h1>');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening');
});