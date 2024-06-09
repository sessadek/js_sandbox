let min = 1,
    max = 10,
    winningNum = getRandomNumber(min, max),
    guessLeft = 3;

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.querySelector('#guess-input'),
    guessBtn = document.querySelector('#guess-btn'),
    message = document.querySelector('.message');



minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e) {
    
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
});

guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess > max || guess < min) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won

    if(guess === winningNum) {
        // guessInput.disabled = true;
        // guessInput.style.borderColor = 'green';
        // setMessage(`${winningNum} is Correct you WIN !!`, 'green');

        gameOver(true, `${winningNum} is Correct you WIN !!`);
    } else {
        guessLeft--;
        if(guessLeft <= 0) {
            // Game Over
            // guessInput.disabled = true;
            // guessInput.style.borderColor = 'red';
            // setMessage(`Game Over, the winning number is ${winningNum}`, 'red');
            gameOver(false, `Game Over, the winning number is ${winningNum}`);
        } else {
            // Game Continue

            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess} is not correct, ${guessLeft} guesses Left`, 'red');
        }
    }
});


function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}

// Game Over
function gameOver(won, msg) {
    let color;
    won ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg, color);
    
    guessBtn.value = 'Play again';
    guessBtn.className = 'play-again';
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}