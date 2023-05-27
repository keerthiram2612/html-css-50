const starE1 = document.querySelectorAll(".fa-star");
const colorsArray = ["red","orange","lightblue","lightgreen","green"];
const regularE1 = document.querySelectorAll(".fa-regular");

updateRating(0);

starE1.forEach((starE1, index)=>{
    starE1.addEventListener("click",()=>{
        updateRating(index);
    })
})

function updateRating(index){
    starE1.forEach((starE1,idx)=>{
        if(idx<index+1){
           starE1.classList.add("active");
        }else{
            starE1.classList.remove("active");
        }
    })
   regularE1.forEach((regularE1)=>{
    regularE1.style.transform=`translateX(-${index * 50}px)`;
    regularE1.style.color = colorsArray[index]
   })
}