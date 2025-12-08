const dbConnect=require('./connect')
const abcd=async()=>{
    const db=await dbConnect();
    const result=await db.updateOne({name:'G40'},{$set:{name:'onefusion+'}});
    console.log('Data Updated');
}
abcd()
