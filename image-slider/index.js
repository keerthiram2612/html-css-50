const nextE1 = document.querySelector(".next");

const prevE1 = document.querySelector(".prev");

const imgsE1 = document.querySelectorAll("img");

const imageContE1 = document.querySelector(".image-container")

let timeout;
let currentImg = 1

nextE1.addEventListener("click",()=>{
    currentImg++
    clearTimeout(timeout)
    updateImg()
})
prevE1.addEventListener("click",()=>{
    currentImg--
    clearTimeout(timeout)
    updateImg()
})
updateImg()

function updateImg(){
    if(currentImg>imgsE1.length){
        currentImg = 1;
    }else if(currentImg < 1){
        currentImg = imgsE1.length;
    }
    timeout=setTimeout(()=>{
       currentImg++
       updateImg()
    },3000)

   imageContE1.style.transform = `translateX(-${(currentImg-1)*500}px)`
}