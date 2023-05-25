const btnE1 = document.getElementById("btn");

const emojiNameE1 = document.getElementById("emoji-name");


const emoji = [];

async function getEmoji(){

     let response = await fetch("https://emoji-api.com/emojis?access_key=fa74f7c49597134d6b0d7d2ee40d033696fe388b")/*await waits to code to response*/

     data = await response.json();
     /*convert the response to json*/
     

     for (let i=0; i<1500;i++){
        emoji.push({
            emojiname : data[i].character,
            emojicode : data[i].unicodeName,
        })
     }

}

getEmoji();


btnE1.addEventListener("click",()=>{
    const randomNum = Math.floor(Math.random()*emoji.length);
    btnE1.innerText = emoji[randomNum].emojiname;
    emojiNameE1.innerText = emoji[randomNum].emojicode;
});