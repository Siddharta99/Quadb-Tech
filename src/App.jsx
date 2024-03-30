// App.js
import React, { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen w-full text-center bg-gradient-to-b from-gray-900 to-gray-600 py-10">
      <h1 className=' text-center relative text-3xl sm:text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100'>To-Do List</h1>
      <input className='text-center mr-44 pr-20  mx-auto justify-between m-20 text-xl sm:text-2xl md:text-4xl font-extrabold bg-clip-text text-transparent '
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
        
      />
      <button className='m-20 bg-blue-600 rounded-md w-20 h-20' onClick={handleAddTask}>Add Task</button>
      <ul className='text-center'>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className='mr-30 p-20   text-red-500' onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
