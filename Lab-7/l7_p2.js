const http = require('http');
http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the homepage!');
    }
    else if (req.url === '/about') {
        res.end('This is the about page.');
    }
    else if (req.url === '/contact') {
        res.end('This is the contact page.');
    }
    else if (req.url === '/cart') {
        res.end('This is the cart page.');
    }
    else if (req.url === '/payment') {
        res.end('This is the payment page.');
    }
    else {
        res.end('Sorry, that page does not exist.');
    }
})
server.listen(3000,()=>{
    console.log("Server started on port 3000");
})

// const http=require('http')
// const fs=require('fs')
// const server = http.createServer((req,resp)=>{
//     console.log("request recived at",req.url)
//     if(req.url == '/about'){
//         fs.readFile('about.html', (src,data)=>{
//             if(src){
//                 resp.end(src);
//             }
//             else{
//                 resp.statusCode=200;
//                 resp.setHeader('Content-Type','text/html');
//                 resp.end(data);
//             }
//         })
//     }
//     else if(req.url == '/contact'){
//         fs.readFile('contact.html', (src,data)=>{
//             if(src){
//                 resp.end(src);
//             }
//             else{
//                 resp.statusCode=200;
//                 resp.setHeader('Content-Type','text/html');
//                 resp.end(data);
//             }
//         })
//     }
//     else if(req.url == '/cart'){
//         fs.readFile('cart.html', (src,data)=>{
//             if(src){
//                 resp.end(src);
//             }
//             else{
//                 resp.statusCode=200;
//                 resp.setHeader('Content-Type','text/html');
//                 resp.end(data);
//             }
//         })
//     }
//     else if(req.url == '/payment'){
//         fs.readFile('payment.html', (src,data)=>{
//             if(src){
//                 resp.end(src);
//             }
//             else{
//                 resp.statusCode=200;
//                 resp.setHeader('Content-Type','text/html');
//                 resp.end(data);
//             }
//         })
//     }
//     else{
//         fs.readFile('home.html', (src,data)=>{
//             if(src){
//                 resp.end(src);
//             }
//             else{
//                 resp.statusCode=200;
//                 resp.setHeader('Content-Type','text/html');
//                 resp.end(data);
//             }
//         })
//     }
// })
// server.listen(3000,()=>{
//     console.log("Server started on port 3000");
// })

