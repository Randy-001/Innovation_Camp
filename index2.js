const { exec, execFile,spawn } = require('child_process');
const { syncBuiltinESMExports } = require('module');

const val1 = 1;



  var child = spawn('wget',['https://nodejs.org/dist/v16.15.0/node-v16.15.0-x64.msi'], {detached: true})

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  
  // Usage!
  sleep(10000).then(() => {
    child.kill();
    // execFile('pkill',['wget'] ,(error, stdout, stderr) => {
    //     if (error) {
    //       console.error(`exec error: ${error}`);
    //       return;
    //     }
    //     console.log(`stdout: No. of directories = ${stdout}`);
    //     console.log(stdout);
    //     if (stderr!= "")
    //     console.error(`stderr: ${stderr}`);
    //   });
  });


