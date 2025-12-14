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