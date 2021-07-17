
const { clear } = require('console');
const fs = require('fs');
const http = require('http');
const url = require('url');


// const path = require('./logger');
///////////////Files
//////Syncronosus - blocking
// const fileIn = fs.readFileSync('./logger.js', 'utf-8');
// console.log(fileIn);
// const textOut = 'This is the sample text inserted';
// fs.writeFileSync('./sample.txt', fileIn);
// console.log('file written succesfully');

/////////Asyncronosus - blocking
// const fileIn = fs.readFile('./logger.js', 'utf-8', (err, data) => {
//     return data;
// });
// const fileOut = fs.writeFile('./sample', `${path}`, 'utf-8', err => {
//     console.log('File has written');
// });
// fs.readFile('./logger.js', 'utf-8', (err, data) => {
//     fs.writeFile('./sample.js', `${path}`, 'utf-8', err => {
//         console.log('file written');
//     })
// });
// const writeFile = fs.writeFile('./sample', `${readFile}`, 'utf-8', err => {
//     console.log('file writted');
// })

///////Creating server
// const server = http.createServer((req, res) => {
//     const serverPath = req.url;
//     if (serverPath === '/' || serverPath === '/overview') {
//         res.end('This is overview');
//     } else if (serverPath === '/product') {
//         res.end('This is product');
//     } else if (serverPath === '/api') {
//         fs.readFile('./logger.js', 'utf-8', (err, data) => {
//             const parseData = JSON.parse(data);
//             console.log(parseData.name);
//             console.log(data);
//             // res.end(data);
//         })
//     }
//     else {
//         res.writeHead(404, {
//             'content-type': 'text/html',
//         });
//         res.end('<h1>Page not found </h1>')
//     }
// })

// server.listen(8000, '127.0.0.1', () => {
//     console.log('listening the server');
// });

const profile = fs.readFileSync('../template/profile.html', 'utf-8');
const data = fs.readFileSync('./logger.js', 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === '/' || pathName === '/profile')
        //  output = profile;
        res.writeHead(200, {
            'content-type': 'text/html'
        })
    res.end(profile);
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening');
});