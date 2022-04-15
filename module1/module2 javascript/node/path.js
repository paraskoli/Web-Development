//"C:\Users\paras\OneDrive\Desktop\New folder\webdev\module2\path.js"

let path = require("path");
// console.log(path);

let extensionName =path.extname("/C:\Users\paras\OneDrive\Desktop\New folder\webdev\module2\path.js");
console.log(extensionName);

 let baseName=path.basename(__filename);
let basename =path.basename("C:\Users\paras\OneDrive\Desktop\New folder\webdev\module2\childprocess.js");
 console.log(baseName);

// console.log(__dirname);
// console.log(__filename);

let dirpath = __dirname;
  console.log(dirpath);

let nawfilepath=path.join(dirpath,"test.js");
console.log(nawfilepath);