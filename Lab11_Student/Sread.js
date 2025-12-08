const dbConnect=require("./Sconnect")
dbConnect().then((resp)=>{
    resp.find({}).toArray().then((data)=>{
        console.log(data);
    })
})