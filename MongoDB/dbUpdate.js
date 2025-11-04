import { MongoClient } from "mongodb";
const dbname="University";
MongoClient.connect("mongodb://localhost:27017/")
.then(client=>{
    const db=client.db(dbname)
    const collection=db.collection("student");
    const query={name:"abc"};
    const update={$set:{name:"Krishna",age:21}};
    return collection.updateOne(query,update)
     .then(res=>{
        console.group("Matched:",res.matchedCount,"Modified :",res.modifiedCount);
        return client.close();
     })
})
 .catch((err)=>{
    console.error("Error occured",err);
})