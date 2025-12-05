const fs=require("fs");
const student1=['501,Vraj,21020201106,6352566666,CE,9.00',
                '502,Tushar,21020201106,6352566666,CE,9.00']
const stddata=student1.join('\n');
fs.appendFile('Student.txt',stddata,(err)=>{
    if(err){
        console.log('Error Printing the Data')
    }   
    else{
        console.log('Data successfully added')
    }
})
//Write writefile instead of appendfile to store data only once