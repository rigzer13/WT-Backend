
function sample(){
  let name = "Jayanth";
  return name;
}


function Obj(){
  let obj = { name:"A", id:123 };
  return obj;
}
class Myclass {
  sayHi() {
    return "I'm a function from class";
  }
}
//not defualt
export {sample, Obj, Myclass};
