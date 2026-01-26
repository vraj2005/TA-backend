const dbConnect=require("./connect")
dbConnect().then((resp)=>{
    resp.find({}).toArray().then((data)=>{
        console.log(data);
    })
})