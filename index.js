const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let filePath = '';

    if (req.url === '/') {
        filePath = path.join(__dirname, 'index.html');
    }else if(req.url === '/about') {
        filePath = path.join(__dirname, 'about.html')
    }else if(req.url === '/contact') {
        filePath = path.join(__dirname, 'contactMe.html')
    }else{
        filePath = path.join(__dirname, '404.html')
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type' : 'text/plain'});
            res.end('Server Error')
        }else{
            res.writeHead(200, {"Content-Type" : 'text/html'})
            res.end(data)
        }
    })
})
server.listen(3000, () => {
    console.log('Server is running')
});