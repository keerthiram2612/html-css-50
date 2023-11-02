
let num = 0;

const value = document.querySelector(".value");
const btnE1 = document.querySelectorAll(".btn");

btnE1.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
      console.log(event);
    });
  
});