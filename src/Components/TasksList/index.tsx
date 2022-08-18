import React, { FC } from 'react';
import { Task } from "../../types";

type Props = {
  tasks: Task[]
}
const TasksList: FC<Props> = ({tasks}) => {
  return (
    <div>
      {
        tasks.length
          ?
          tasks.map((task, index) =>
            <div key={task.id}>
              {index}. {task.title}<br/>
            </div>)
          :
          <>Задания не найдены!</>
      }
    </div>
  );
};

export default TasksList;