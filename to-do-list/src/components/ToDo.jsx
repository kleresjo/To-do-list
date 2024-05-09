import React, { useState } from "react";
import { HiMinusCircle } from "react-icons/hi";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      text: task,
    };
    setTasks([...tasks, newTask]); 
    setTask(""); 
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleMoveToDone = (taskId) => {
    const selectedTask = tasks.find(task => task.id === taskId);
    setDoneTasks([...doneTasks, selectedTask]);
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="forms">
      <h1 className="title">To do list</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Lära sig react..." className="inputTodo" value={task} onChange={handleChange}/>
        <button type="submit" value="Submit" className="taskButton">Add task</button>
      </form>
      <div className="formResults">
        {tasks.map((task) => (
          <div className="result" key={task.id} onClick={() => handleMoveToDone(task.id)}>
            <p>{task.text}</p>
            <HiMinusCircle className="check" onClick={() => handleDelete(task.id)}/>
          </div>
        ))}
      </div>
      <div className="formResults">
        {doneTasks.map((task) => (
          <div className="result" key={task.id}>
            <p><del>{task.text}</del></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
