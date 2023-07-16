const counterE1 = document.querySelector(".counter");

const loadingBarFrontE1 = document.querySelector(".loading-bar-front");

let idx = 0;

updateNum()

function updateNum(){
    counterE1.innerText = idx + "%"
    loadingBarFrontE1.style.width = idx +"%"
    idx++
    if(idx<101){
        setTimeout(updateNum,20)
    }
}