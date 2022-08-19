import React, { useState } from "react";
import TextInputForm from "./Components/TextInputForm";
import TasksList from "./Components/TasksList";

const App = () => {
  const [tasks, setTasks] = useState([{ title: "Наименование", id: 0 }]);
  const [task, setTask] = useState({ title: "", id: 0 });

  return (
    <div className="App">
      <TextInputForm
        task={task}
        setTask={setTask}
        setTasks={setTasks}
        tasks={tasks}
      />
      <TasksList setTasks={setTasks} tasks={tasks} setTask={setTask} />
    </div>
  );
};

export default App;
