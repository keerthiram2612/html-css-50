const testimonials = [
    {
        name: "Emmalynn F",
        photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        text : "Without Apple, we would have gone bankrupt by now. I will let my mum know about this, she could really make use of Apple!",
    },
    {
        name: "Coralyn Q",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        text : "I would gladly pay over 600 dollars for apple. I would like to personally thank you for your outstanding product. We can't understand how we've been living without apple.",

    },
    {
        name: " Zerk I",
        photoUrl: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
        text : "Apple should be nominated for service of the year. If you aren't sure, always go for apple. Apple is great.",

    },


]
const imgE1 = document.querySelector("img");
const textE1 = document.querySelector(".text");
const usernameE1 = document.querySelector(".username");

let idx = 0;
updateTestimonial()

function updateTestimonial(){
    const{name,photoUrl,text} = testimonials[idx];
    imgE1.src = photoUrl;
    textE1.innerText = text;
    usernameE1.innerText = name;
    idx++
    if(idx===testimonials.length){
        idx = 0;

    }
    setTimeout(()=>{
      updateTestimonial()
    },10000)
}