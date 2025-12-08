const dbConnect=require('./Sconnect')
const abcd=async()=>{
    const db=await dbConnect();
    const result=await db.updateOne({name:'Vraj'},{$set:{name:'Vraj Nakum'}});
    console.log('Data Updated');
}
abcd()
