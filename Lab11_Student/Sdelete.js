const dbConnect =require('./Sconnect')
const abcde=async()=>{
    const db =await dbConnect();
    const result=await db.deleteOne({name:'Vraj Nakum'});
    console.log('Data Deleted');
}
abcde();