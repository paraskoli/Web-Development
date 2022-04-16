let fs=require("fs");
console.log(fs);

let path =require("path");
let filePath=path.join(__dirname,"file.txt");
console.log(filePath);
//create
fs.writeFileSync(filePath,"hello me");

//read
console.log("Before upadte:");
let content =fs.readFileSync(filePath,'utf-8');
console.log(content);

//update
fs.appendFileSync(filePath,"\n new content");
console.log(fs.readFileSync(filePath,'utf-8'));

//delete
// fs.unlinkSync(filePath);
