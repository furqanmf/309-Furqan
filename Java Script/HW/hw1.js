const os=require('os')

const multiply=(num1,num2) => {return num1*num2;};
const bytesToSize = (bytes) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    const j = Math.round(bytes / Math.pow(1024, i), 2)
    let resultmul=multiply(j,1024)
    return resultmul+' '+'MB';

    };

    
     console.log("a.");
     console.log('free memory : ', bytesToSize(os.freemem()));
     console.log('total memory : ', bytesToSize(os.totalmem()));

    console.log(" ");
    console.log("b.");
     console.log("cpu information: ");
     console.log(os.cpus()[0]);
     
     console.log(" ");
     console.log("c.");
     console.log("User information: ");
     console.log("Username: "+os.userInfo().username);
     console.log("Home-Dir: "+os.userInfo().homedir);