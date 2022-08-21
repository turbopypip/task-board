import React, { FC, FormEvent } from "react";
import { Task } from "../../types";

type Props = {
  task: Task;
  setTask: (task: Task) => void;
  setTasks: (tasks: Task[]) => void;
  tasks: Task[];
};

const TextInputForm: FC<Props> = ({ task, setTask, setTasks, tasks }) => {

  const setTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({id: `${Date.now()}`, title: e.target.value})
  };

  const createTask = (newTask: Task) => {
    if (newTask.title.length > 0 && !tasks.find((t) => t.title === task.title)){
      if (newTask.title.length > 17){
        let newTitle = newTask.title.split("")
        let i = 0
        while (i < newTask.title.length - 1){
          i = i + 1
          if (i % 17 == 0){
            newTitle[i] = newTitle[i] + `\n`
            console.log(newTitle)
          }
        }
        newTask.title = newTitle.join("")
        console.log(newTask.title)
        setTasks([newTask, ...tasks]);
        localStorage.setItem("tasks",  JSON.stringify([newTask, ...tasks]))
      }
      setTasks([newTask, ...tasks]);
      localStorage.setItem("tasks",  JSON.stringify([newTask, ...tasks]))
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = {
      ...task,
      id: `${Date.now()}`,
    };
    createTask(newTask);
    localStorage.setItem(newTask.id, newTask.title)
    setTask({ title: "", id: "" });
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
          onChange={setTitle}
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
