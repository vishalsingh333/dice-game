import { lazy, useState } from "react";
import './Game.css';

const Game = () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const [rules, setRules] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [currentDice, setCurrentDice] = useState(1);
    const [value,setValue] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);

    const selectNumber = () => {
        if (isSelected === true) {
            const newDiceValue = Math.floor(Math.random() * 6) + 1;
            setCurrentDice(newDiceValue);
            newDiceValue === value ?(setCurrentScore( (prev) => 
                prev + newDiceValue + value
             )
            ):(setCurrentScore((prev) =>
                prev - 2
            ))
            
            setIsSelected(false);
        }
    }
    return (
        <div className="game-container">
            <div className="game-header">
                <div className="game-score">
                    <p className="score-p">{currentScore}</p>
                    <p className="total-score-p">Total Score</p>
                </div>
                <div className="game-numbers">
                    {
                        !isSelected && <div className="select-warning">
                            You haven't selected any number yet
                        </div>
                    }
                    <div className="number-container">
                        {numbers.map((number) => (
                            <button
                                key={number}
                                className={isSelected && value === number ? 'selected-number-btn' : 'number-btn'}
                                onClick={() => { setIsSelected(true); setValue(number); }}
                            >
                                {number}
                            </button>
                        ))}
                    </div>
                    
                    <p className="temp">Select Number</p>
                </div>
            </div>

            <div className="game-content">
                <div onClick={selectNumber} className="dice-pic">
                    <img src={`/src/assets/dice${currentDice}.JPG`} width="250px" height="250px" alt={`dice${currentDice}` } />
                    <p>Click on Dice to roll</p>
                </div>

                <div className="game-btn">
                    <button onClick={() => {setCurrentScore(0)}} className="reset-btn">
                        Reset Score
                    </button>

                    <button onClick={() => { setRules(!rules) }} className="rules-btn">
                        {
                            rules ? "Hide Rules" : "Show Rules"
                        }
                    </button>
                </div>
            </div>

            {

                rules &&
                <div className="rules-container">
                    <h3 className="rules-heading">How to play Dice game</h3>
                    <ul className="rules-list">
                        <li>Select any number</li>
                        <li>click on dice image</li>
                        <li>after click on dice if selected number is equal to dice number you will get same point as dice</li>
                        <li>if you get wrong guess then 2 points will be deduced</li>
                    </ul>
                </div>
            }
        </div>
    );
}

export default Game;