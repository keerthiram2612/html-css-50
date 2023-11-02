const tabs = document.querySelector(".tabs");
<<<<<<< HEAD

tabs.addEventListener("click",(event)=>{
console.log(event.tabs);
=======
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

tabs.addEventListener("click",(event)=>{

const id = event.target.dataset.id
if(id){
   btns.forEach((btn)=>{
      btn.classList.remove("live");
   })
   event.target.classList.add("live");

   articles.forEach((article)=>{
    article.classList.remove("live");
   })
   const element = document.getElementById(id);
   element.classList.add("live");
}  
>>>>>>> 3169e4534b51ad2324cee10f5d2d207d4daaa802
})