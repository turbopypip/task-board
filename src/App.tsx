import React, { useState } from 'react';
import TextInputForm from "./Components/TextInputForm";
import TasksList from "./Components/TasksList";

const App = () => {
  const [tasks, setTasks] = useState([{}])

  return (
    <div className="App">
      <TextInputForm setTasks={setTasks} tasks={tasks}/>
      <br/>
      <hr/>
      <TasksList tasks={tasks} />
    </div>
  );
}

export default App;
