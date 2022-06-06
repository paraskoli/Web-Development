//make a folder inside same directory of this file and in that folder make a text file with content 
// new file has been mad
let fs = require("fs");
let path= require("path");
if(!fs.existsSync("newFolder"))
{
    fs.mkdirSync("newFolder");
}
let filekaPath=path.join(__dirname,"newFolder","newFile.txt");
 console.log(filekaPath);
fs.writeFileSync(filekaPath,"new file has been made");