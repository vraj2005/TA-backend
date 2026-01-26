const dbConnect=require("./Fconnect")
dbConnect().then((resp)=>{
    resp.find({}).toArray().then((data)=>{
        console.log(data);
    })
})