// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
const n1=document.getElementById('number1')
const n2=document.getElementById('number2')
let Rn1= Math.round(Math.random()*100)
let Rn2= Math.round(Math.random()*100)

n1.innerHTML=Rn1;
n2.innerHTML=Rn2;

// Iteration 3: Creating variables required to make the game functional
const add=document.getElementById('plus')
const subtract=document.getElementById('minus')
const multiply=document.getElementById('mul')
const division=document.getElementById('divide')
const modulus=document.getElementById('modulus')

let score=0
var operator

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
const n3=document.getElementById('number3')
let number3

// Iteration 5: Creating a randomise function to make the game functional
function randomise(){
    Rn1=Math.round(Math.random()*100)
    Rn2=Math.round(Math.random()*100)

    if(Rn1<Rn2){
        var temp=Rn1
        Rn1=Rn2
        Rn2=temp
    }

    operator =Math.round(Math.random()*5)
    switch(operator){
        case 1:
            number3=Rn1+Rn2
            break
        case 2:
            number3=Rn1-Rn2
            break
        case 3:
            number3=Rn1*Rn2
            break
        case 4:
            number3=Math.floor(Rn1/Rn2)
            break
        case 5:
            number3=Rn1%Rn2
            break
        case 0:
            randomise();
    }
    n1.innerHTML=Rn1
    n2.innerHTML=Rn2
    n3.innerHTML=number3

    console.log(Rn1+" "+Rn2+" "+number3+" "+operator)
}
randomise()

// Iteration 6: Making the Operators (button) functional
add.onclick=()=>{
    if(Rn1+Rn2==number3){
        score++
        randomise()
        resetTime(timerId)
    } else{
        location.href="./gameover.html?score="+score
    }
}

subtract.onclick=()=>{
    if(Rn1-Rn2==number3){
        score++
        randomise()
        resetTime(timerId)
    } else{
        location.href="./gameover.html?score="+score
    }
}

multiply.onclick=()=>{
    if(Rn1*Rn2==number3){
        score++
        randomise()
        resetTime(timerId)
    } else{
        location.href="./gameover.html?score="+score
    }
}

division.onclick=()=>{
    if(Math.floor(Rn1/Rn2)==number3){
        score++
        randomise()
        resetTime(timerId)
    } else{
        location.href="./gameover.html?score="+score
    }
}

multiply.onclick=()=>{
    if(Rn1*Rn2==number3){
        score++
        randomise()
        resetTime(timerId)
    } else{
        location.href="./gameover.html?score="+score
    }
}

modulus.onclick=()=>{
    if(Rn1%Rn2==number3){
        score++
        randomise()
        resetTime(timerId)
    } else{
        location.href="./gameover.html?score="+score
    }
}
// Iteration 7: Making Timer functional
var timerId
let time=20

function startTimer(){
    time=20
    timer.innerHTML=time
    timerId=setInterval(()=>{
        time--
        if(time==0) location.href="./gameover.html?score="+score
        timer.innerHTML=time
    },1000)
}

function resetTime(intervalId){
    clearInterval(intervalId)
    startTimer()
}
startTimer()