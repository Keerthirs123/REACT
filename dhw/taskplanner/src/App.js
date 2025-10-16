import React, { useState } from "react";
import Tasklist from "./Tasklist";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App(){
  const[task,setTask]=useState("");
  const[tasks,setTasks]=useState([]);
  const[message,setMessage]=useState("Add a task to get started!");
  const[bgcolor,setBgColor]=useState("white");


const handleAddTask = (e) => {
  e.preventDefault();
  if (task.trim() === "")return;

  setTasks([...tasks,task]);
  setMessage(`${task} is added`);
  setBgColor("lightblue");
  setTask("")
};

return (
  <div className="container py-5" style={{backgroundColor:bgColor, minHeight:"100vh"}}>
    <div className="card p-4 mb-4 shadow">
      <h3 className="mb-3 text-center">Task Planner</h3>
      <form onSubmit={handleAddTask} className="d-flex gap-2">
        <input
         type="text"
         className="form-control"
         placeholder="Enter a task"
         value={task}
         onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Add Task</button>
      </form>
    </div>
    <TaskList tasks={tasks} message={message}/>
  </div>
);
}
export default App;