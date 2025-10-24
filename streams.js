import fs from 'fs'
const read=fs.createReadStream('sample.txt',{encoding:'ascii'});//higWaterMark size of data to read at once
//events are emiited
read.on('open',()=> console.log('File opened.'))
read.on('data',(chunk)=>{console.log('Chunk received:', chunk)})
read.on('end', () => console.log('Finished reading.'));
read.on('error', (err) => console.error('Error:', err));
read.on('finish',()=>console.log('completed the task'))

const  writable=fs.createWriteStream('sampleoutput.txt')
writable.write(' Nyop');
writable.on('finish',()=>console.log('Finshed writing'))//woudnt be called because should use .end() to indicate 
writable.write('\n YO');
//writable.end()
writable.on('error',(err) => console.error('Error:', err))

//pipe
read.pipe(writable) 
writable.on('finish', () => console.log('File copied successfully.'));// pipe emitts finish event , no need of end() 

