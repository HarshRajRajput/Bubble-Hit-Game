const TimeButton = document.getElementById("Time");
const HitButton = document.getElementById("Hit");
const ScoreButton = document.getElementById("Score");
const AllButtons = document.querySelector("#All_btn");
let TimeLeft = 60;
let Score=0;
let RendomNumber=0;

function ButtonGenerator() {
    let Clutter=""
for (let index = 0; index <=199; index++) {
    let RendomNumberGenerator=Math.floor(Math.random()*9+1)  // Generate Rendom Number Between 1 to 9
    Clutter+=`<button class="btn">${RendomNumberGenerator}</button>`
    
}
AllButtons.innerHTML=Clutter
}
function runTime() {
   let TimeIncrement= setInterval(() => {
      if (TimeLeft > 0) {
        TimeLeft--;
        TimeButton.textContent = TimeLeft;
      } else {
        clearInterval(TimeIncrement)
        AllButtons.innerHTML=`<div><h1 id="GameOver">Your Final Score is: ${Score} </h1><h1 id="GameOver">Game Over</h1></div>`
        HitButton.innerHTML=0
      }
    },1000);
  }

  function ScorIncrement() {
    Score=Score+10
    ScoreButton.textContent=Score
  }
 
function NewHit() {
 RendomNumber=Math.floor(Math.random()*9+1)
 HitButton.textContent=RendomNumber
}

AllButtons.addEventListener("click",(e)=>{
    let GeneratedEvent=Number(e.target.textContent)
    
    if (GeneratedEvent==RendomNumber) {
        ScorIncrement();
        ButtonGenerator();
        NewHit()
    }
})
ButtonGenerator()
runTime();
NewHit()



