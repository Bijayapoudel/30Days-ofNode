const fs=require('fs');

fs.writeFile("read.txt","Today is an Awesome Day!!", (err)=>{

console.log("File is Created!!!");

});


fs.appendFile("read.txt", "THANK YOU", (err)=> {
console.log("Task Completed!!");
});


fs.readFile('read.txt','UTF-8',(err,data)=> {
console.log(data)
})

