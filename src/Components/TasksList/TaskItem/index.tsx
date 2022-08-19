import React, {FC, useState} from 'react';
import {Task} from "../../../types";

type Props = {
  remove: (task: Task) => void,
  index: number,
  task: Task
}

const TaskItem: FC<Props> = ({remove, index, task}) => {
  const [taskDone, setTaskDone] = useState(false)

  return (
    <div
      style={{
          marginTop:"5%",
          display: "flex",
          justifyContent: "space-between"
        }}
    >
      <div
        key={task.id}
        style={{textDecoration: `${taskDone ? "line-through" : "none"}`}}
      >
        {index}. {task.title}<br/>
      </div>
      <ul style={{display:"flex", listStyleType: "none", flexDirection: "row", margin: "0"}}>
        <li><button onClick={() => remove(task)}>У</button></li>
        <li><button onClick={() => setTaskDone(!taskDone)}>З</button></li>
      </ul>
    </div>
  );
};

export default TaskItem;