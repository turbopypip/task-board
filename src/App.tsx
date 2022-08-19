import React, { useState } from 'react';
import TextInputForm from "./Components/TextInputForm";
import TasksList from "./Components/TasksList";

const App = () => {
  const [tasks, setTasks] = useState([{title: "Наименование", id: 0}])

  return (
    <div className="App">
      <TextInputForm setTasks={setTasks} tasks={tasks}/>
      <TasksList setTasks={setTasks} tasks={tasks} />
    </div>
  );
}

export default App;
