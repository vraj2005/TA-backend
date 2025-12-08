const dbConnect=require('./Fconnect')
const abcd=async()=>{
    const db=await dbConnect();
    const result=await db.updateOne({Name:'Niraj Ahuja'},{$set:{Subjectcode:'21020CS5505',Subjectname:'Javascript Framework'}});
    console.log('Data Updated');
}
abcd()
