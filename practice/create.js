let fs = require("fs");
 console.log(fs);
let path =require("path");

let filePath= path.join(__dirname,"file.txt");
 console.log(filePath);

fs.writeFileSync(filePath,"hello i am a text file"); // create a file 
fs.writeFileSync(filePath,"hello paras");


let content =fs.readFileSync(filePath,"utf-8");
console.log(content);



