import fs from "fs"
fs.open("Chalk.js","r",(err,fd)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("successfully opened");
        fs.close(fd);
    }
    
}
)
