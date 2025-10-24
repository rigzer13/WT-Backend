import {Writable,Readable} from 'stream'//wont store anyhting , jsut a handler
const write=new Writable({
    write(chunk,encoding,callback){
       console.log('Writing chunk:', chunk.toString());
       callback();//must , tell Node we finished processing this chunk
    },

//Signals all data has been fully written and processed.
//Must call callback() inside final() so Node can emit 'finish'.
    final(callback){//should be final 
        console.log('All data written!');
        callback();
    }
})

/*write.write("Hello");
write.write("World");
write.end();*/
var read=new Readable({
    read(size){
        //we use this to attach properties and methods to that instance and since read is an instamce of Readable object.
        this.push("yo")//Using this is necessary because push is a method of the stream object, not a global function.
        this.push(null)//to terminate
    } 
})
//read.pipe(write)
console.log("Type something (Ctrl+D to end):");
process.stdin.pipe(write)
