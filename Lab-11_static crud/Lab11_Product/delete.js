const dbConnect =require('./connect')
const abcde=async()=>{
    const db =await dbConnect();
    const result=await db.deleteOne({name:'14'});
}
abcde();