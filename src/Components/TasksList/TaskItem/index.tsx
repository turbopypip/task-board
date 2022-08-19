import React, { FC, useState } from "react";
import { Task } from "../../../types";

type Props = {
  task: Task;
  tasks: Task[];
  setTask: (task: Task) => void;
  remove: (task: Task) => void;
  index: number;
};

const TaskItem: FC<Props> = ({ tasks, setTask, remove, index, task }) => {
  const [taskDone, setTaskDone] = useState(false);
  const [changeTask, setChangeTask] = useState(false);
  const [temporaryTask, setTemporaryTask] = useState({ title: "", id: 0 });

  const HandleChange = () => {
    const prevTask = tasks.findIndex((t) => t.id === task.id);
    tasks[prevTask] = temporaryTask;
    setTask({ title: "", id: 0 });
    setChangeTask(false);
  };

  return (
    <div
      style={{
        marginTop: "5%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        key={task.id}
        style={{ textDecoration: `${taskDone ? "line-through" : "none"}` }}
      >
        {changeTask ? (
          <div
            style={{
              display: "flex",
              listStyleType: "none",
              flexDirection: "row",
              margin: "0",
            }}
          >
            {index}.{" "}
            <input
              type="text"
              placeholder="изменить"
              onChange={(e) =>
                setTemporaryTask({ id: task.id, title: e.target.value })
              }
            />
          </div>
        ) : (
          <>
            {index}. {task.title}
            <br />
          </>
        )}
      </div>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          flexDirection: "row",
          margin: "0",
        }}
      >
        {changeTask ? (
          <>
            <li>
              <button onClick={HandleChange}>П</button>
            </li>
            <li>
              <button onClick={() => setChangeTask(false)}>О</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <button onClick={() => remove(task)}>У</button>
            </li>
            <li>
              <button onClick={() => setChangeTask(true)}>И</button>
            </li>
            <li>
              <button onClick={() => setTaskDone(!taskDone)}>З</button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default TaskItem;
