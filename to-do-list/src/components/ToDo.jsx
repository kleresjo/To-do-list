import React, { useState } from 'react';
import MakeTask from './MakeTask';

const ToDo = ({ value }) => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

return (
  <div>
    <div>
      <MakeTask onAddTask={handleAddTask} />
    </div>
    <div className="layout">
    <div className="layout-2">
      <h1 className="title">To do</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
    <div className='layout-3'>
      <h1 className="title">Done</h1>
      <ul>

      </ul>
    </div>
    </div>
  </div>
);
};

export default ToDo;
