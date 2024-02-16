function handleKeyPress(event) {
    const playerPressed = event.key;

    if (playerPressed === 'Escape') {
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if (playerPressed === expectedAlphabet) {
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            gameOver();
        }
    }
}

document.addEventListener('keyup', handleKeyPress);

function continueGame() {
    const alphabet = getRandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play() {
    hideElementByID('home-screen');
    hideElementByID('final-score');
    showElementById('play-ground');

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver() {
    hideElementByID('play-ground');
    showElementById('final-score');
    const gameScore = getTextElementValueById('current-score');
    setTextElementValueById('game-score', gameScore);
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}