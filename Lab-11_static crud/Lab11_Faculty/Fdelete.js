const dbConnect =require('./Fconnect')
const abcde=async()=>{
    const db =await dbConnect();
    const result=await db.deleteOne({Name:'Niraj Ahuja'});
    console.log("Data Deleted")
}
abcde();