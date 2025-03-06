import React, { useState,useEffect } from 'react'
import '../CSS/Result.css';
export default function Result(props) {
    const [rating, setRating] = useState();

    function getRatingMessage(score){
        if(score <= 3){
            return "Keep going! Practice makes perfect. 💡";
        }
        else if(score <= 6){
            return "Nice try! A little more effort and you'll ace it. 💪";
        }
        else if(score <= 8){
            return "Well done! You're getting really good! 🌟";
        }
        else{
            return "Amazing! You're a quiz master! 🎉";
        }
    };

    // Usage inside component
    useEffect(() => {
        setRating(getRatingMessage(props.score));
    }, [props.score]);

    return(
    <div className='result'>
        <h1>Quiz Ended</h1>
        <div className='your-score'>
            <h3>Your Score:</h3>
            <p><span>{props.score}</span>/<span>{props.length}</span></p>
        </div>
        <p>{rating}</p>
        <button onClick={() => window.location.reload()}>Start Quiz again</button>
    </div>
  )
}
