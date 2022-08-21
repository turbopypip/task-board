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
  const [temporaryTask, setTemporaryTask] = useState({ title: "", id: "" });

  const HandleAccept = () => {
    const prevTask = tasks.findIndex((t) => t.id === task.id);

    if (
      temporaryTask.title.length > 0 &&
      !tasks.find((t) => t.title === temporaryTask.title)
    ) {
      if (temporaryTask.title.length > 17) {
        let newTitle = temporaryTask.title.split("");
        let i = 0;
        while (i < temporaryTask.title.length - 1) {
          i = i + 1;
          if (i % 17 == 0) {
            newTitle[i] = newTitle[i] + `\n`;
            console.log(newTitle);
          }
        }
        temporaryTask.title = newTitle.join("");

        localStorage.setItem(temporaryTask.id, temporaryTask.title);
        tasks[prevTask] = temporaryTask;
        setTask({ title: "", id: "" });
        setChangeTask(false);
      }

      localStorage.setItem(temporaryTask.id, temporaryTask.title);
      tasks[prevTask] = temporaryTask;
      setTask({ title: "", id: "" });
      setChangeTask(false);
    }
  };

  const HandleRemove = () => {
    remove(task);
    setTaskDone(false);
  };

  const HandleChangeTask = () => {
    setChangeTask(true);
    setTaskDone(false);
  };

  const HandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemporaryTask({ id: `${task.id}`, title: e.target.value });
  };
  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      HandleAccept();
    }
  };

  return (
    <div
      style={{
        maxWidth: "20vw",
        marginTop: "5%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ textDecoration: `${taskDone ? "line-through" : "none"}` }}>
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
              id="ChangeTask"
              type="text"
              placeholder="изменить"
              onChange={HandleInput}
              onKeyPress={onKeyPress}
            />
          </div>
        ) : (
          <>
            {index + 1}. {localStorage.getItem(task.id)}
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
              <button onClick={HandleAccept}>П</button>
            </li>
            <li>
              <button onClick={() => setChangeTask(false)}>О</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <button onClick={HandleRemove}>У</button>
            </li>
            <li>
              <button onClick={HandleChangeTask}>И</button>
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
