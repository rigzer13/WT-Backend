import { MongoClient } from "mongodb";
const dbname="University";
MongoClient.connect("mongodb://localhost:27017/")
.then(client=>{
    const db=client.db(dbname)
    const collection=db.collection("student");
    const query={name:"abc"};
    return collection.deleteOne(query)
     .then(res=>{
        console.log("Deleted: ",res.deletedCount);
     })
})
 .catch((err)=>{
    console.error("Error occured",err);
})