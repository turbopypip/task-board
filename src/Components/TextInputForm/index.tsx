import React, { FC, FormEvent } from "react";
import { Task } from "../../types";

type Props = {
  task: Task;
  setTask: (task: Task) => void;
  setTasks: ([]) => void;
  tasks: Task[];
};

const TextInputForm: FC<Props> = ({ task, setTask, setTasks, tasks }) => {
  const createTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = {
      ...task,
      id: Date.now(),
    };

    createTask(newTask);
    setTask({ title: "", id: 0 });
  };

  return (
    <>
      <form
        style={{
          display: "flex",
          margin: "0 40% 0 40%",
          justifyContent: "space-between",
        }}
        onSubmit={(e) => onSubmit(e)}
      >
        <input
          value={task.title}
          onChange={(e) => setTask({ id: Date.now(), title: e.target.value })}
          type="text"
        />
        <input type="submit" />
      </form>
      <br />
      <hr style={{ margin: "0 40% 0 40%" }} />
    </>
  );
};

export default TextInputForm;
