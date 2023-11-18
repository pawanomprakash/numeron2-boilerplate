// Iteration 8: Making scoreboard functional
var urlParams=new URLSearchParams(window.location.search)
console.log(urlParams)
var score=urlParams.get("score")

var scoreboard=document.getElementById("score-board");
var playagainbtn=document.getElementById("play-again-button");

scoreboard.innerHTML=score;
playagainbtn.onclick=(evt)=>{
    location.href="./game.html";
};