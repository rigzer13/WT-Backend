import fs from "fs"
    fs.truncate('sample.txt',2,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Truncated successfuly")
    }
   })  
