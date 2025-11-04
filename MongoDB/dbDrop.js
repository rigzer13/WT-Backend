import { MongoClient } from "mongodb";
const dbname="University";
MongoClient.connect("mongodb://localhost:27017/")
.then(client=>{
    const db=client.db(dbname)
    return db.collection("University").drop()
     .then(res=>{
        console.log("Collection dropped :",res);
        
     })
})
 .catch((err)=>{
    console.error("Error occured",err);
})