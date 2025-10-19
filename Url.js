import {URL} from "url";
const myurl=new URL("https://example.com:8080/path/page?name=John&age=25#bio");

console.log("href:",myurl.href);
console.log("Protocol:",myurl.protocol);
console.log("Host:",myurl.host);
console.log("hostname:",myurl.hostname);
console.log("Port:",myurl.port);
console.log("Pathname:",myurl.pathname);
console.log("Hash:",myurl.hash);


