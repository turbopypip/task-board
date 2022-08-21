import React, { useState } from "react";
import TextInputForm from "./Components/TextInputForm";
import TasksList from "./Components/TasksList";
import {Task} from "./types";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(JSON.parse(localStorage.getItem("tasks")) || []);
  const [task, setTask] = useState({ title: "", id: "" });


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
