let fs = require("fs");
// console.log(fs);
let path =require("path");

// let filePath= path.join(__dirname,"file.txt");
// console.log(filePath);

// //C-Create
// fs.writeFileSync(filePath,"hello i am a text file"); // create a file 
// fs.writeFileSync(filePath,"hello paras");

// //R-Read
// console.log("before update ");
// let content = fs.readFileSync(filePath,'utf-8');
// console.log(content);

// //U-Update
// fs.appendFileSync(filePath," \nNewly added"); // \n for new line
//  console.log("after update");
//  console.log(fs.readFileSync(filePath,'utf-8'));

//  //D-delete
// fs.unlinkSync(filePath);

// create a directory

// fs.mkdirSync("my directory");
// if (!fs.existsSync("my directory"));
// fs.mkdirSync("my directory");

//read a directory
// let folderPath = "D:\\desktop\\FJP6web development\\module1\\module2 javascript\\javascipt"; //add \ in path
//or
// let folderpath = __dirname;
// let ContentOfFolder = fs.readdirSync(folderpath);
// console.log(ContentOfFolder);

//delete a directory
// fs.rmdirSync("my directory");

//Read a directory

//delete a directory
// fs.rmdirSync("my directory");

//copy a file
let sourcePath=path.join(__dirname,"file.txt")
 let destinationPath=path.join(__dirname,"module","file.txt")
 console.log(sourcePath);
 console.log(destinationPath);

 fs.copyFileSync(sourcePath,destinationPath);