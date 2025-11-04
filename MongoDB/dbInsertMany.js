import { MongoClient } from "mongodb";
const dbname="University";

MongoClient.connect("mongodb://localhost:27017/")
.then(client=>{
    const db=client.db(dbname);
    const collection=db.collection("student");
    const docs=[{name:"abc",srn:103},{name:"cdf",srn:120}]
    return collection.insertMany(docs)
     .then(res=>{
        console.log(`${res.insertedCount} documents inserted`);//beow Esc key
        return client.close()
     })
})
 .catch((err)=>{
    console.error("Error occured",err);
})