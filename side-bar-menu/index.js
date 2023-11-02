const timesE1 = document.querySelector(".fa-xmark");
const side =document.querySelector(".sidebar");
const barE1 = document.querySelector(".fa-bars");

barE1.addEventListener("click",()=>{
   side.classList.toggle("show-sidebar");
});
timesE1.addEventListener("click",()=>{
    side.classList.remove("show-sidebar");
})