import React, { FC } from 'react';
import { Task } from "../../types";
import TaskItem from "./TaskItem";

type Props = {
  setTasks: ([]) => void;
  tasks: Task[]
}
const TasksList: FC<Props> = ({setTasks, tasks}) => {

  const removeTask = (task: Task) => {
    setTasks(tasks.filter(t=> t.id !== task.id))
  }

  return (
    <div style={{margin: "0 40% 0 40%"}}>
      {
        tasks.length
          ?
          tasks.map((task, index) => <TaskItem remove={removeTask} task={task} index={index}/>)
          :
          <p style={{textAlign: "center"}}>Задания не найдены!</p>
      }
    </div>
  );
};

export default TasksList;