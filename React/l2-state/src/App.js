
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "record lecture", completed: false },
    { id: 2, name: "edit lecture", completed: false },
    { id: 3, name: "watch lecture", completed: false }
  ]);

  return (
    <div className="App">
      <h1>Task List</h1>
      <ul>
        {tasks.map(({ id, name, completed }) => (
          <li key={id}>
            <span>{id} - {name}</span>
            <button> delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

