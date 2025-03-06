import React, { useEffect, useState } from 'react';
import Option from './Option';
import Result from './Result';
import '../CSS/Quiz.css';

export default function Quiz() {
    const [quizData, setQuizData] = useState([]);
    const [score, setScore] = useState(0);
    const [index, setIndex] = useState(0);

    let currentQue = quizData[index];
    useEffect(()=>{
        fetchData();
    },[]);

    //Fetch Data from API
   async function fetchData(){
        try{
            let data = await fetch("https://the-trivia-api.com/v2/questions");
            let res = await data.json();
            console.log(res);
            
            setQuizData(res);
        }catch(err){
            console.log(err);
            alert("Error: Could not load Question"); 
        }
    }

    // Go to the Next Question
    function nextQuestion(){
        setIndex((prevIndex)=> prevIndex + 1);
    }

    // display contents
    let content;
    
    if (quizData.length > 0) {
        if(index === quizData.length){
            content = <Result score = {score} length = {quizData.length}/>
        }else{
            content = (
                <div className='eachSet' key={currentQue.id}>
                    <h2>Quiz App</h2>
                    <h3>Question {index + 1}</h3>
                    <p className='Question' >{currentQue.question.text}</p>

                    <Option
                        incorrectAns={currentQue.incorrectAnswers}
                        correctAns={currentQue.correctAnswer}
                        idx={index}
                        incrementIdx={nextQuestion}
                        score={score}
                        setScore={setScore}
                    />

                    {index < quizData.length && (
                        <button onClick={nextQuestion}>{"Skip >>"}</button>
                    )}
                </div>
            );
        }        
    }else {
        content = <div className="spinner"></div>;
      }

  return (
    <>
    {content}
    </>
  );
}
