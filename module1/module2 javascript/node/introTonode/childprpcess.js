let cp= require ('child_process');
// console.log(cp);

//open calculator wuth the help of this file

// cp.execFileSync("calc");

// function paras(){
// cp.execFileSync("calc");
// }
// paras();
// paras();
// paras();

// cp.execFileSync("calc");

// console.log("calc");

//open vs code with child process
// cp.execSync("code"); 

let copk =cp.execSync("node os.js");
console.log("output-of-os.js-file-is:"+ copk);