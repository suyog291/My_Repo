let length_pass=10;
let allchars= "~!@#$%^&*()_+`{}[]:;'<>?,./0123456789aYZWbcdefgh021384683518ijklmopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVX";

let myfunc=function (){
   let pass="";
while (pass.length <length_pass) {
  pass += allchars[Math.floor(Math.random()*allchars.length) ]
}return pass;
let newpass=pass;}

   

document.querySelector("#btn").addEventListener("click",function call(e){
   
   document.querySelector("#password").value=myfunc();
})


