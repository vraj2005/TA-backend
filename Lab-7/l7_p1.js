const http=require('http')
const server=http.createServer((req,resp)=>{
    console.log("request Recived")
    resp.end("Hello")
})
server.listen(3000,()=>{
    console.log("Server started on port 3000");
})