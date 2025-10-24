import fs from "fs"
fs.open("Chalk.js","r",(err,fd)=>{
    if(err){
        console.log(err);
    }
    else{
       fs.write(fs,'hello',(err,fd))
    }
    
}
)
//fs.writeFile


