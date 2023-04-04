//OS Architecture

const os=require('os');
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

//Total Memory 
const totalMemory=os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`);          //Converting byte into giga bytes(GB)


//Free Memory
const freeMemory=os.freemem();
console.log(`${freeMemory/1024/1024/1024}`);

