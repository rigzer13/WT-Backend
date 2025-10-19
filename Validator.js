import validator from "validator"
const email="yo@gmail.com";
const wrongEmail="yo@gmail";

console.log(validator.isEmail(email));
console.log(validator.isEmail(wrongEmail));

console.log(validator.isURL("https://google.com"));
console.log(validator.isURL("google"));


//check if stirng contains only alpha
console.log(validator.isAlpha("hello"));
console.log(validator.isAlpha("hello123"));

//trim extra spaces from the beginning and end 
let name="  PES123"
console.log(validator.trim(name));