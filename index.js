// const axios = require('axios');

// axios
//   .get('https://localhost:8080')
//   .then(res => {
//     console.log(`statusCode: ${res.status}`);
//     console.log(res);
//   })
//   .catch(error => {
//     console.error(error);
//   });

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === "/") {
        res.writeHead(200, {'content-type': 'text/html'})
        fs.createReadStream('index.html').pipe(res)
    } else if (req.url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        fs.createReadStream('about.html').pipe(res)
    } else if (req.url === '/contact-me') {
        res.writeHead(200, {'content-type': 'text/html'})
        fs.createReadStream('contact-me.html').pipe(res)
    } else {
        res.writeHead(404, {'content-type': 'text/html'});
        fs.createReadStream('404.html').pipe(res)
    }
})

server.listen(8080)

