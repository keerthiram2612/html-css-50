const nextE1 = document.getElementById("next");

const progressE1 = document.querySelector(".progress-bar-front");

const stepE1 = document.querySelectorAll(".step");

const prevE1 = document.getElementById("prev");

let currentChecked = 1;

nextE1.addEventListener("click",()=>{
   currentChecked++;
   if(currentChecked>stepE1.length){
      currentChecked = stepE1.length;
    
   }
   updateCheck()
});
prevE1.addEventListener("click",()=>{
    currentChecked--;
    if(currentChecked<1){
        currentChecked = 1;
    }
    updateCheck()
})
function updateCheck(){
    stepE1.forEach((stepE1,idx)=>{
        if(idx < currentChecked){
           stepE1.classList.add("checked");
           stepE1.innerHTML = `
           <i class="fa-solid fa-check"></i>
           <small>${idx===0 ? "Start" : idx === stepE1.length - 1 ?"final":"Step"+idx}</small>
           `
        }else{
            stepE1.classList.remove("checked");
            stepE1.innerHTML = `
            <i class="fa-solid fa-xmark"></i>
            `;
        }
    })

    const checkedNumber = document.querySelectorAll(".checked")

progressE1.style.width = ((checkedNumber.length-1)/(stepE1.length-1)*100+"%");
if(currentChecked === 1){
    prevE1.disabled = true;
}else if(currentChecked === stepE1.length){
    nextE1.disabled = true;
}else{
    prevE1.disabled = false;
    nextE1.disabled = false;
}

}

 