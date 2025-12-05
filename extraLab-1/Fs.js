const fs = require("fs")
//asynchronous readfile
fs.readFile("demo.txt","utf-8",(err,data)=>{
    if (err) throw err;
    console.log(data);
});
console.log("Hello World readfile (Async)");
//synchronous readfile
const read=fs.readFileSync("demo.txt","utf-8");
console.log(read);
console.log("Hello World readfile (Sync)");

//asynchronous writefile
fs.writeFile("demo.txt", "Hello (async)", (err) => {
    if (err) throw err;
    console.log("File written successfully.");
});
console.log("Hello World writefile (Async)");
//synchronous writefile
const write=fs.writeFileSync("demo.txt","Hello (sync)");
console.log("File write Successfully");
console.log("Hello World writefile (Sync)");

//asynchronous appendfile
fs.appendFile("demo.txt", "\n appended text (Async).", (err) => {
    if (err) throw err;
    console.log("Content appended asynchronously.");
});
console.log("Hello World appendfile (Async)");
//synchronous appendfile
const append=fs.appendFileSync("demo.txt","\n appended text (Sync).");
console.log("Content appended synchronously");
console.log("Hello World appendfile (Sync)");

//asynchronous renamefile
fs.rename("demo.txt", "hii.txt", (err) => {
    if (err) throw err;
    console.log("File renamed successfully.");
});
console.log("Hello World renamefile (Async)");
//synchronous renamefile
const rename=fs.renameSync("hii.txt","demo.txt");
console.log("File Renamed Successfully");
console.log("Hello World renamefile (Sync)");

//asynchronous unlinkfile
fs.unlink("xyz.txt", (err) => {
    if (err) throw err;
    console.log("File deleted successfully.");
});
console.log("Hello World unlinkfile (Async)");
//synchronous unlinkfile
const unlink=fs.unlinkSync("abc.txt");
console.log("File Deleted Successfully");
console.log("Hello World unlinkfile (Sync)");
