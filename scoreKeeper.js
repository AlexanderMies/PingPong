// Select elements to be used
const p1Button = document.querySelector('#player1Button');
const p2Button = document.querySelector('#player2Button');
const resetButton = document.querySelector('#reset');
const p2Display = document.querySelector('#player2Display');
const p1Display = document.querySelector('#player1Display');
const playSelect = document.querySelector('#scoreSelect');

// Changeable values of scoring
let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', ()=>{
    if (!isGameOver){
        p1Score += 1;
        if (p1Score === winningScore){
            isGameOver = true;
            // Winning/losing classes defined in HTML
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener('click', ()=>{
    if (!isGameOver){
        p2Score += 1;
         if (p2Score === winningScore){    
            isGameOver = true;
            // Winning/Losing Classes defined in HTML
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        p2Display.textContent = p2Score;
    }
})

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    isGameOver = false;
    p1Display.classList.remove('winner','loser');
    p2Display.classList.remove('winner','loser');
}

resetButton.addEventListener('click', reset)

playSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})