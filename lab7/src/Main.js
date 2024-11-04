import {useState} from 'react';

const Main = () => {
    const setRandomNumber = () => Math.floor(Math.random() * 11)
    const [randomNumber] = useState(setRandomNumber);
    const [attemptsCount, updateAttempts] = useState(3);
    const [guessMade, updateGuessMade] = useState('');
    const [userMsg, updateUserMsg] = useState('');

    const handleGuess = () => {
        let userGuess = parseInt(guessMade);

        if (isNaN(userGuess)) {
            updateUserMsg('Please only enter numbers!')
            return;
        }

        if (attemptsCount > 0) {
            updateAttempts(attempts => attempts - 1);

            if (attemptsCount === 1) {
                updateUserMsg('Game Over :( The Number Is ' + randomNumber + ", To Play Again Refresh Page!");
                return;
            }

            if (userGuess === randomNumber) {
                updateUserMsg("You Got It! :) Good Job, To Play Again Refresh The Page!");
            }
            else {
                updateUserMsg(userGuess < randomNumber ? "Dang To Low... Try Again!" : "Dang To High... Try Again!");
                updateGuessMade('');
            }
        }
    };

    return(
        <main>
            <p>Take a Guess!</p>
            <div>
                <input type="text" name="guess-box" id="guess-box" value={guessMade} onChange={(updateGuess) => updateGuessMade(updateGuess.target.value)} placeholder="Enter Number"/>
                <button id="guess-button" onClick={handleGuess}>Guess</button>
            </div>
            <p id="guess-count">
                Attempts Remaining: {attemptsCount}
            </p>
            {userMsg} 
        </main>
    )
}

export default Main