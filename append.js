import fs from "fs"
fs.appendFile('sample.txt',"Yosh",(err)=>{
    if(err){
        console.log(err);}
        else{
            console.log('Appended successfully');
        }
    });

   fs.unlink('sample.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("deleted successfully")
    }
   }) 