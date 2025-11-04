import { MongoClient } from "mongodb";
MongoClient.connect("mongodb://localhost:27017/")
 .then((client)=>{  //the variable client represents the connected MongoDB client instance
    console.log("Database connection estabished");
    const db=client.db("University");/* if const database , not client.database("name").Because .db() is the actual method name defined 
                                            in the MongoDB driver it’s not based on your variable name.*/
    console.log('Database University is created');
    client.close();
})
.catch((err)=>{
    console.error("Error occured",err);
})


