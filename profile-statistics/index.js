const counterE1 = document.querySelectorAll(".counter");

counterE1.forEach(counterE1=>{
    counterE1.innerText="0";
     incrementCounter();
function incrementCounter(){
  let currentNum = +counterE1.innerText;
  const dataCeil = counterE1.getAttribute("data-ceil")
  const increment = dataCeil / 15
  currentNum = Math.ceil(currentNum + increment)
  counterE1.innerText = currentNum

}
})