import { MongoClient } from "mongodb";
MongoClient.connect("mongodb://localhost:27017/")
.then(client=>{
    const db=client.db("University");
    return db.createCollection("student") 
    /*“If I want the next .then() to wait or use something, I return it.
     If I’m just doing a side task (like logging), I don’t need to.”*/
   //if two .then() ,im using .then after finishing upper .then , so 
   //to run below .then i need another promise so i return it from upper .then() !
/* example:
Promise.resolve(5)
.then(num => {
  return num * 2; // returns a value
})  
.then(result => {
  console.log(result); // 10
});
called flat chains*/
    .then(()=>{  //this is nested chain
        console.log("collection student created");
        return client.close();

    })
})

/*You use return in flat chains to pass values downward.
You use return in nested chains to make the outer .then() wait for an inner async task.
The placement of braces ) and {} decides which pattern you’re writing.*/

.catch((err)=>{
    console.error("Error occured",err);
})