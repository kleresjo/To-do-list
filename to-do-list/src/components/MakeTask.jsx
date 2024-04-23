import React, { useState } from 'react';

const MakeTask = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(inputValue); 
    setInputValue(''); 
  };

  return (
    <div className="layout-1">
      <h1 className="title">Add task</h1>
      <div className="listDiv">
        <form onSubmit={handleSubmit} >
          <label>
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              className='inputTodo'
            />
          </label>
          <button className="taskButton" type="submit">Add task</button>
        </form>
      </div>
    </div>
  );
};

export default MakeTask;