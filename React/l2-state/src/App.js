import React, { useState } from 'react';
import './App.css';

function App(){
  // declare the state hook in the 
  const [count, setCount] = useState(0);
  console.log(useState(0))

    function addNums(){
      setCount(count +1);
    }

    function subNums(){
      setCount(count -1);
    }
  
  return (
    <>
    <div className="App">
      <div className="Box">
        <h1>This is app 2</h1>
        <p>{count}</p>
        <button onClick={addNums} className="Add">Add</button>
        <button onClick={subNums} className="Subtract">Subtract</button>
      </div>
    </div>
    </>
);
}


export default App;
