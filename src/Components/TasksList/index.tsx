import React, { FC } from "react";
import { Task } from "../../types";
import TaskItem from "./TaskItem";

type Props = {
  setTasks: ([]) => void;
  tasks: Task[];
  setTask: (task: Task) => void;
};
const TasksList: FC<Props> = ({ setTask, setTasks, tasks }) => {
  const removeTask = (task: Task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <div style={{ margin: "0 40% 0 40%" }}>
      {tasks.length ? (
        tasks.map((task, index) => (
          <TaskItem
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
