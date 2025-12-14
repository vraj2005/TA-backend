const http=require('http')
const server=http.createServer((req,resp)=>{

    if (req.url === "/favicon.ico") {
        resp.end();
        return;
    }

    console.log("request Recived",req.url)
    resp.end("Hello world in HTTP server")
})
server.listen(3000,()=>{
    console.log("Server started on port 3000");
})





//if you want to create server using https
// const https = require("https");
// const fs = require("fs");

// const options = {
//     key: fs.readFileSync("key.pem"),
//     cert: fs.readFileSync("cert.pem")
// };

// const server = https.createServer(options, (req, res) => {
//     res.end("Hello Secure World");
// });

// server.listen(3000, () => {
//     console.log("HTTPS server running on port 3000");
// });




// 📄 What are key.pem and cert.pem?

// They are SSL certificate files:

// key.pem → private key

// cert.pem → public certificate

// These are required to encrypt communication.