import React, { useState } from 'react';

function AddTaskForm() {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    console.log('Nueva tarea:', newTask);
    setNewTask('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Escribe una nueva tarea..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
}

export default AddTaskForm;
