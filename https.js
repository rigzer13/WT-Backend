import https from "https"
const options={key:"key" ,cert:"certificate"};//wont run we dont have our own server 
const server=https.createServer(options,(req,res)=>{
    res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("<h1>Hello</h1>");
});

server.listen(3000, () => {
  console.log("Https Server is listening on http://localhost:3000");
});