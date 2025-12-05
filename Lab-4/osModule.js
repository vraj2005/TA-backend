const os = require('os');
// console.log(os);
// console.log("OS Name:", os.type());
// console.log("Release Version:", os.release());
// console.log("Platform:", os.platform());
// console.log("Architecture:", os.arch());

// function convertToGB(bytes) {
//     return (bytes / (1024 * 1024 * 1024)).toFixed(2);
// }
// console.log("Total Memory (GB):", convertToGB(os.totalmem()));
// console.log("Free Memory (GB):", convertToGB(os.freemem()));

// console.log("User Details:");
// console.log(os.userInfo());

// const uptimeSec = os.uptime();
// const uptimeHours = (uptimeSec / 3600).toFixed(2);
// console.log("Uptime in Seconds:", uptimeSec);
// console.log("Uptime in Hours:", uptimeHours);

const cpus = os.cpus();
console.log("Number of CPU Cores:", cpus.length);
cpus.forEach((core, index) => {
    console.log(`Core ${index + 1} Model:`, core.model);
});
const network = os.networkInterfaces();
console.log("\nNetwork Interfaces:");
console.log(network);
