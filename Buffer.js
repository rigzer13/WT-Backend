import fs from "fs"
/*var buf1=new Buffer('Yo')
console.log(buf1.toString())*/
var buf2=Buffer.alloc(10)//use .write() to fill data into the memroy space
console.log(buf2)
var buf3=Buffer.from('YOO')
console.log(buf3.toString())
console.log(buf3.toString)//just toString will print fnction defintion not the  content
buf2.write("20")
console.log(buf2.toString())
console.log(buf2)
buf2.write("yo",2)
//returns how many data has been written
console.log(buf2.write("yo",2))
console.log(buf2.toString())
console.log(buf2)
//copy
//const copied=buf2.copy(copied) wont work we should initialize or allocate memory 
const copied=Buffer.allocUnsafe(10)
buf2.copy(copied)
//returns interger (how many bytes it could copy)
console.log(buf2.copy(copied))
console.log(copied.toString())

//slice wont create new memory., below example just point to 0-2 string in the copied memory
const sliced=copied.slice(0,2)
console.log(sliced.toString())
console.log(copied.toString())

//concate. J- observe you should use Buffer.concat beacuse its a new memory so we use Buffer
const Concatenation=Buffer.concat([buf2,copied]) 
console.log(Concatenation.toString())

console.log("Is it a buffer:",Buffer.isBuffer(Concatenation))
console.log("Length:",Concatenation.length)


//iteration
// for( const i in Concatenation) using 'in' actually acts a index while 'of' deirectly access the data 
var array=['a','b','c'];
for(var i in array){
    console.log(i);
    console.log(array[i])
}
for(var i of array){
    console.log(i);}

//
for( const i of Concatenation){
    console.log(i)
}
//compare J-note return values
var result=Buffer.compare(buf2,copied)
if(result==0){
console.log('Same')
}

//openig and reading to a buffer
fs.open('sample.txt','r',(err,fd)=>{
    if(err){
        return console.log(err);
    }
    else{
        var bufile=Buffer.alloc(10);
      fs.read(fd,bufile,0,bufile.length,0,(err,bytesread,buf)=>{ //fs.read(fd , ypurbuffer,Start reading from buffer,Number of bytes to write,File position to start writing,callback)
         if(err){
        return console.log(err);
    }
    else{
        console.log(bytesread);
        console.log(buf.toString());
    }
      })
    }
    fs.close(fd,(err)=>{
        if(err){
            return console.log("Cannot close");
        }
        console.log("File Closed Successfully")
    })
})



