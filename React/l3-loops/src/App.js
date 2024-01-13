import { useState } from 'react';
import './App.css';

function App() {
  let k = "Mona Mohmed Ahmed "
    const [tasks, setTasks] = useState([
      { id: 1, name: "record lecture", completed: false },
      { id: 2, name: "edit lecture", completed: false },
      { id: 3, name: "watch lecture", completed: false }
    ]);
  return (  
    <div className="App">
      <li>
      <ul>
        {/* {tasks.map(task => <li key={task.id}>{task.name} {task.id}</li>)} */}

        


      </ul>
      </li>
    
    </div>
  );
}

export default App;
