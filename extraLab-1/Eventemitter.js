const em = require("events");
class Myemitter extends em{}
const ticker = new Myemitter();
ticker.on("Video uploaded",()=>{
    console.log("Video uploaded Successfully");
})
ticker.emit("Video");
setInterval(()=>{
    console.log("Video uploaded")
},1000)