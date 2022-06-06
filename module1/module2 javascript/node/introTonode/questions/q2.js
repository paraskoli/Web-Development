// given an array arr=[audio,video,image,software,documents,application,other]
// make folder for each element in the given array and inside each folder make 4 files of that type 

let fs = require("fs");
let path = require("path");
let arr=['Audio','video','software','Documents','Applications','others'];
let nameArr=['abc','efg','xyz','def'];
let extArr=['.mp3','.mp4','.exe','.pdf','.apk','.rar'];

let organisePath =path.join(__dirname,"organise");

if(!fs.existsSync(organisePath))
fs.mkdirSync(organisePath);
for (let i=0;i<arr.length;i++)
{
    let folderkaPath=path.join(organisePath,arr[i]);
   if(!fs.existsSync(folderkaPath))
    fs.mkdirSync(folderkaPath)
    for(let j=0;j<nameArr.length;j++)
    {   let fileName=nameArr[j]+extArr[i];
        let filekaPath=path.join(folderkaPath,fileName);
        fs.writeFileSync(filekaPath, "");
    }
}