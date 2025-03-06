import Quiz from './components/JS/Quiz';
import './App.css';
import React, {useState} from 'react';


function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  return (
    <div className="App">
      <button 
      onClick={()=> setStartQuiz(true)}
      style={{display: startQuiz ? 'none' : 'block'}}
      className='start-btn'
      >
        Click to Start Quiz..!
      </button>

      {startQuiz && <Quiz/>}
    </div>
  );
}

export default App;
