
import { useState, useEffect } from 'react'
import './App.css'

function App() { 
  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)

  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWin = () => {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let win of wins) {
      const [a, b, c] = win;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    let count = 0;
    for (let pos of state){
      if (pos!=null){
        count++;
      }
    }
    if(count == state.length){
      return "DRAW!!"
    }
  
}
 
  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };
  

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  }

  const handleReset = () => {
    setPlayer1('');
    setPlayer2('');
    setFormSubmitted(false);
    setState(Array(9).fill(null));
    setIsXTurn(true);
  
  }
  const winner = checkWin();

  
  return (
    <div className='container'>
      <h1>TIC TAC TOE</h1>
      {formSubmitted ? (
        <>
        

        {winner?(
          <>
          {winner === "X" ? (
            <>
            
            <h2>{player1} WON!!</h2>
            </>
          ) : winner === "O" ? (
            <>
            
            <h2>{player2} WON!!</h2>
            </>
          ) : (
            <h2>It's a DRAW!!</h2>
          )}
           <button class='glowing-btn' onClick={handleReset}><span class='glowing-txt'>TRY<span class='faulty-letter'>  A</span>GAIN</span></button>
          </>
        ):(
          <>
          <div className='scores'>
          <h2>{player1} : X</h2>
          <h2>{player2} : O</h2>
          </div>
          <div className="game-board">
            
        <div className="box" onClick={()=>handleClick(0)}>{state[0]}</div>
        <div className="box" onClick={()=>handleClick(1)}>{state[1]}</div>
        <div className="box" onClick={()=>handleClick(2)}>{state[2]}</div>
        <div className="box" onClick={()=>handleClick(3)}>{state[3]}</div>
        <div className="box" onClick={()=>handleClick(4)}>{state[4]}</div>
        <div className="box" onClick={()=>handleClick(5)}>{state[5]}</div>
        <div className="box" onClick={()=>handleClick(6)}>{state[6]}</div>
        <div className="box" onClick={()=>handleClick(7)}>{state[7]}</div>
        <div className="box" onClick={()=>handleClick(8)}>{state[8]}</div>
      </div>
      </>
      )}
      </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='players'>
            <input type="text" className='form_input' placeholder='PLAYER 1' value={player1} onChange={(e) => setPlayer1(e.target.value)} required/>
            <input type="text" className='form_input' placeholder='PLAYER 2' value={player2} onChange={(e) => setPlayer2(e.target.value)} required/>
            <button class='glowing-btn'><span class='glowing-txt'>D<span class='faulty-letter'>O</span>NE</span></button>
          </div>
        </form>
        
      )}
    </div>
  )
}

export default App
