const containerE1 = document.querySelector(".container");

const leftE1 = document.querySelector(".left");

const rightE1 = document.querySelector(".right");

leftE1.addEventListener("mouseenter",()=>{
    containerE1.classList.add("active-left")
})