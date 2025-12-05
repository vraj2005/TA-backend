const childProcess = require('child_process');
const { stdout} = require('process');
let result = childProcess.exec('dir', (err, stdout, stdin) => {
    console.log(stdout)
})