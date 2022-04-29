const { exec, execFile } = require('child_process');

execFile('wget',['-P','D:\innovation_camp','-c','"D:\Unconfirmed 402590.crdownload"','https://r6---sn-ci5gup-jwce.gvt1.com/edgedl/android/studio/install/2021.1.1.23/android-studio-2021.1.1.23-windows.exe?cms_redirect=yes&mh=cV&mip=2401:4900:4ddb:7790:b80f:1527:362b:7102&mm=28&mn=sn-ci5gup-jwce&ms=nvh&mt=1651074500&mv=m&mvi=6&pcm2cms=yes&pl=48&rmhost=r1---sn-ci5gup-jwce.gvt1.com&shardbypass=sd'], (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: No. of directories = ${stdout}`);
    if (stderr!= "")
    console.error(`stderr: ${stderr}`);
  });
