import React, { FC } from "react";
import { Task } from "../../types";
import TaskItem from "./TaskItem";

type Props = {
  setTasks: (tasks: Task[]) => void;
  tasks: Task[];
  setTask: (task: Task) => void;
};
const TasksList: FC<Props> = ({ setTask, setTasks, tasks }) => {
  const removeTask = (task: Task) => {
    let newTasks = tasks.filter((t) => t.id !== task.id);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  return (
    <div style={{ margin: "0 40% 0 40%" }}>
      {tasks.length ? (
        tasks.map((task: Task, index: number) => (
          <TaskItem
            key={task.id}
            tasks={tasks}
            setTask={setTask}
            remove={removeTask}
            task={task}
            index={index}
          />
        ))
      ) : (
        <p style={{ textAlign: "center" }}>Задания не найдены!</p>
      )}
    </div>
  );
};

export default TasksList;
