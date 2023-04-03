//  const fs=require('fs');

// //Creating the new file

// fs.writeFileSync("bijju.txt","Welcome Home!!!")
// fs.writeFileSync("bijju.txt","Welcome Home, Mr.Bijay!!")
// fs.writeFileSync("pou.txt","cxcxcxc")

// fs.appendFileSync("bijju.txt","sdsdsdsdsd")


// // const read=fs.readFileSync("bijju.txt");


// // org_data=read.toString();
// // console.log(org_data);




// // // //TO RENAME A FILE----->>>
// // fs.renameSync('bijju.txt','bijjupoudel.txt');




// 1) CREATE A FOLDER NAME tmp

const fs=require('fs');
var dir='./tmp';
if(!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}


// //2)Create a file in it named bio.txt and insert data into it

fs.writeFileSync("tmp/bio.txt", "HEY Boy!");


// // //3)Add more data into the file at the end of the existing data

// fs.appendFileSync("tmp/bio.txt","WELCOME TO NEPAL!");


// // //4)Read the data without getting the buffer data at first

// const reading=fs.readFileSync("tmp/bio.txt");
// console.log(reading.toString());

// // //5)Rename the file name to mybio.txt

fs.renameSync('tmp/bio.txt','tmp/mybio.txt');


// // //6)Delete both the file and the folder

// fs.unlinkSync("tmp/mybio.txt");

// fs.rmdirSync('tmp');