const path = require('path');

// console.log("Directory Name:",__dirname);
// console.log("File Name:",__filename);
// console.log("Base Name:",path.basename(__filename));
// console.log("Extension Name:",path.extname(__filename));



// const finalPath = path.join('users','arjun','documents','project');
// console.log("Joined Path:",finalPath);

// const wrongPath = "//folder//subfolder////file.txt";
// const cleanPath = path.normalize(wrongPath);
// console.log("Normalized Path:", cleanPath);

let inputPath = "c:\\users\arjun";
if (path.isAbsolute(inputPath)) {
    console.log("Absolute Path");
} 
else {
    console.log("Relative Path");
}

// const absolutePath = path.resolve("folder", "subfolder", "app.js");
// console.log("Resolved Absolute Path:", absolutePath);