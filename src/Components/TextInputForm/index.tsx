import React, {FC, FormEvent, useState} from 'react';
import { Task } from "../../types";

type Props = {
  setTasks: ([]) => void;
  tasks: Task[]
}

const TextInputForm: FC<Props> = ({setTasks ,tasks}) => {

  const createTask = (newTask: Task) => {
    setTasks([...tasks, newTask])
  }

  const [task, setTask] = useState({title: "", id: 0})

  const onSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = {
      ...task,
      id: Date.now()
    }

    createTask(newTask)
    setTask({title: "", id: 0})
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        value={task.title}
        onChange={e => setTask({id: Date.now(),title: e.target.value})}
        type="text"
      />
      <input type="submit"/>
    </form>
  );
};

export default TextInputForm;