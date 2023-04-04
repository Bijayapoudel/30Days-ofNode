//CHALLENGE (ASYNCHRONOUS)


//1) Create a folder named tmp
const fs=require('fs');
fs.mkdir('tmp',(err)=> {
console.log('Folder Created!!');
});



//2) Create file inside tmp foler
fs.writeFile('./tmp/bio.txt','Hello, Everyone!!!', (err)=>{
    console.log('File Created!!');
})



//3)Append the data
fs.appendFile('./tmp/bio.txt','Hello World!!',(err)=> {
    console.log('Appended!!!!');
})



//4)Read the data without getting the buffer data at first
fs.readFile('./tmp/bio.txt','utf-8',(err,data)=>{
    console.log(data);
})


//5)Rename the file bio.txt to mybio.txt
fs.rename('./tmp/bio.txt','./tmp/mybio.txt',(err)=>{
console.log("Renamed!!!!");
});


//6)Delete the folder and the file
fs.rmdir('./tmp/',(err)=>{
    console.log('Folder deleted!!');
});

fs.unlink('./tmp/mybio.txt',(err)=> {
    console.log('File Deleted!!');
});


