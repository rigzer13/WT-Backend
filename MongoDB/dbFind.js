import { MongoClient } from "mongodb";
const dbname="University";
MongoClient.connect("mongodb://localhost:27017/")
 .then(client=>{
    const db=client.db(dbname);
    const collection=db.collection("student");
     return collection.find({},{projection :{_id:0,name:1}}).toArray()// to print in the array format on terminal
     .then(docs=>{
        console.log("Documents found:",docs);  
        return client.close();
     })
 })
 .catch((err)=>{
    console.error("Error occured",err);
})