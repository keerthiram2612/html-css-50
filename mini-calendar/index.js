const monthNameE1=document.getElementById("month-name");
const dayNameE1=document.getElementById("day-name");
const dayNumberE1=document.getElementById("day-number");
const yearE1=document.getElementById("year");

const date=new Date();
const month=date.getMonth();
monthNameE1.innerText= date.toLocaleString("en",{
  month: "long" 
})

dayNameE1.innerText=date.toLocaleString("en",{  /*toLocaleString() method returns a Date object as a string, using locale settings.*/
    weekday:"long"
})

dayNumberE1.innerText=date.getDate()

yearE1.innerText=date.getFullYear()




