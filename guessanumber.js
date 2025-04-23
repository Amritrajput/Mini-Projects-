let randomnumber= (parseInt( Math . random () * 100) + 1);
const submit=document.querySelector('#submit');
const userinput=document.querySelector('#guessfield');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastresult');
const lowOrhi=document.querySelector('.lowOrhi');
const startover=document.querySelector('.resultparas');

const p = document.createElement('p');
let prevGuess = []
let numGuess = 1
let playGame = true;

if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault();
        const guess= parseInt(userinput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
if(isNaN(guess)){
    alert('please enter a valid number');
}else if(guess < 1){
    alert('please enter a number greater than 1');
}
else if(guess > 100){
    alert('please enter a number less than 100');
}else{
    prevGuess.push(guess);
    if (numGuess === 11){
        displayGuess(guess);
        displaymessage(`Game Over.random number was ${randomnumber}`)
        endGame()
    }else{
        displayGuess(guess);
        checkguess(guess)
    }
}
}

function checkguess(guess){
    if(guess === randomnumber){
        displaymessage(`you guessed it right`);
        endGame();
    }else if(guess < randomnumber){
        displaymessage(`number is too low`);
    }
    else if(guess < randomnumber){
        displaymessage(`number is too high`);
    }
}

function displayGuess(guess){
    userinput.value="";
    guessSlot.innerHTML += `${guess} ,`
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displaymessage(message){
    lowOrhi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userinput.value=''
    userinput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">start new game</h2>`;
    startover.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
const newgamebutton=document.querySelector('#newGame')
newgamebutton.addEventListener('click',function(e){
randomnumber=parseInt( Math . random () * 100) + 1;
prevGuess=[]
numGuess=1
guessSlot.innerHTML=''
remaining.innerHTML = `${11 - numGuess}`
userinput.removeAttribute('disabled')
startover.removeChild(p)
playGame=true;
})
}

