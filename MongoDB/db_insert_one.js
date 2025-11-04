import { MongoClient } from "mongodb";
const dbname="University";

MongoClient.connect("mongodb://localhost:27017/")
 .then(client=>{
    const db=client.db(dbname);
    const collection=db.collection("student");
    return collection.insertOne({name:"Jayanth",srn:123})
     .then(res=>{
        console.log("1 document inserted:",res.insertedId);
        return client.close()
     })
 })
 .catch((err)=>{
    console.error("Error occured",err);
})