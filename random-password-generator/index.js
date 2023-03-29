const btnE1=document.querySelector(".btn");
const inputE1=document.getElementById("input");
const copyE1=document.querySelector(".fa-copy");

btnE1.addEventListener("click",()=>{
    createPassword();
});

copyE1.addEventListener("click",()=>{
    copyPassword();
})

function createPassword(){
   const chars="0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const passwordLength=14;
   let password="";
   for (let index = 0; index < passwordLength; index++) {
   const randomNum=Math.floor(Math.random()*chars.length);
    password+=chars.substring(randomNum,randomNum+1);

     
   }
    inputE1.value=password;
   

}
function copyPassword(){
    inputE1.select();
    inputE1.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputE1.value);

}