const child_process = require("child_process");
// console.log(child_process);
// const { exec } = require("child_process");

child_process.exec("node -v", (error, stdout) => {
    if (error) {
        console.error("Error occurred:", error.message);
        return;
    }
    console.log("Current Node.js Version:", stdout);
});


const cmd = child_process.spawn("cmd", ["/c", "dir"]);  

cmd.stdout.on("data", (data) => {
    console.log(`Output: ${data}`);
});

cmd.stderr.on("data", (data) => {
    console.error(`Error: ${data}`);
});

console.log("Current Working Directory:", process.cwd());
