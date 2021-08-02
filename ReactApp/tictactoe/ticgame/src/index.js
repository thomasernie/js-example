import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {useState}   from 'react';
import reportWebVitals from './reportWebVitals';


function Square({value,onClick}){
    return (
        <button className = "square" onClick = {() => 
          onClick()
        }>
            {value}
        </button>
    )
}


function Board({squares,onClick}) {
  return (
        <div className="board-row">
            {squares.map((square,i) => (
            <Square  key ={i} value = {square} onClick = {() => onClick(i)}/>
            ))}
        </div>)
}

function Game(){
  const [history,setHistory] = useState([Array(9).fill(null)]); 
  const [stepNumber,setStepNumber] = useState(0);
  const [xIsNext,setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);


  const handleClick = (i) => {
    const timeInhistory = history.slice(0,stepNumber + 1);
    const  current = timeInhistory[stepNumber];
    const squares = [...current]
      // const boardCopy = [...board];
      if(winner || squares[i]) return;
      squares[i]  = xIsNext ? 'X' : 'O';
      setHistory([...timeInhistory,squares]);
      setStepNumber(timeInhistory.length);
      setXisNext(!xIsNext);
  }

  const jumpTo = (step) => {
    setStepNumber(step)
    setXisNext(step % 2 === 0)
  }

  const renderMoves = () => (
    history.map((_step,move) =>{ 
      const destination = move ? `Go to move ${move}` : `Go to start`;
      return (
        <div className = "history">
        <li key = {move}>
          <button className= "start" onClick = {() => jumpTo(move)}>{destination}</button>
        </li>
        </div>
      )})
  )
      return(
        <div className = "container">
            <Board squares = {history[stepNumber]}
            onClick = {(i) => handleClick(i)} />
            <div className = "status">
              <p>{winner ? 'Winner:' + " " + winner : 'Next Player' +"  "+ (xIsNext ? 'X' : 'O')}</p>
              {renderMoves()} 
              <div> </div>
            </div>
      </div>
    )
}



ReactDOM.render( 
  <Game/>,
  document.getElementById('root')
);


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
