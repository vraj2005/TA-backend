const fs=require('fs')
const http=require('http');
// fs.writeFileSync('home.txt','This is home Page File')
// fs.writeFileSync('about.txt','This is about Page File')
// fs.writeFileSync('contact.txt','This is contact Page File')
http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(fs.readFileSync('home.txt'))
    }
    else if (req.url === '/about') {
        res.end(fs.readFileSync('about.txt'))
    }
    else if (req.url === '/contact') {
        res.end(fs.readFileSync('contact.txt'))
    }
    else {
        res.end('404 Not Found')
    }
}).listen(3000);