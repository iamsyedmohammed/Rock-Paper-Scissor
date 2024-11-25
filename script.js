//First Make a three elements for Rock paper Scissors 
//then give them the inner text 

let allOptions=document.querySelectorAll(".button");
let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");
let message=document.querySelector(".messageContainer");
randoms=["Scissor","Rock","Paper"]
let randomplays=randoms[Math.floor(Math.random()*randoms.length)];
let scoreContainer=document.querySelector(".scoreContainer");

console.log(randomplays);
let randomPlayercount =0;
let userCount=0;
allOptions.forEach((userinput)=>{
    
    userinput.addEventListener("click",()=>{
        scoreContainer.classList.remove("hide");
        let randomplays=randoms[Math.floor(Math.random()*randoms.length)];
        scoreContainer.classList.remove("hide");
        message.classList.remove("hide");
        if(userinput.id===randomplays){
           
            message.innerText="The Game Has Drawn"
             message.innerText+=`\n You Choose ${userinput.id} and the Bot Choose ${randomplays}`
        }else if(userinput.id==="Rock" && randomplays==="Scissor" || userinput.id==="Paper" && randomplays==="Rock" || userinput.id==="Scissor" && randomplays==="Paper"){
            message.innerText="You Have Won the Game"
             message.innerText+=`\n You Choose ${userinput.id} and the Bot Choose ${randomplays}`
            userCount++;
        }else {
            message.innerText="You Have Lost the Game"
             message.innerText+=`\n You Choose ${userinput.id} and the Bot Choose ${randomplays}`
             randomPlayercount++;

        }
        scoreContainer.innerText=`Player Points: ${userCount}`;
        scoreContainer.innerText+=`\nComputer Points: ${randomPlayercount}`;
    })
   
})


