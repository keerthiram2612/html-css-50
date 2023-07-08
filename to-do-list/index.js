const formE1 = document.querySelector(".form");

const inputE1 = document.querySelector(".input");

const ulE1 = document.querySelector(".list")

formE1.addEventListener("submit",(event)=>{
    event.preventDefault();/*Page could not be refresh*/
    toDoList()
});
function toDoList(){
    let newTask = inputE1.value;
    const liE1 = document.createElement("li");  
    liE1.innerText = newTask; 
    ulE1.appendChild(liE1) 
    inputE1.value = ""
    const checkBtnE1 = document.createElement("div")
    checkBtnE1.innerHTML = `
    <i class="fa-solid fa-square-check">
    `
    liE1.appendChild(checkBtnE1);
    const  trashE1 = document.createElement("div")
    trashE1.innerHTML = `
    <i class="fa-solid fa-trash">
    `
    liE1.appendChild(trashE1);

    checkBtnE1.addEventListener("click",()=>{
        liE1.classList.toggle("checked")
    })
}