import React, { useState } from 'react';
import TextInputForm from "./TextInputForm";

const App = () => {
  console.log("app")
  const [task, getTask] = useState("")
  return (
    <div className="App">
      <TextInputForm getTask={getTask}/>
      <>{task}</>
    </div>
  );
}

export default App;
