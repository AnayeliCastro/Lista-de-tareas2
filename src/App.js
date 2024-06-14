import React from 'react';
import './App.css';
import TaskList from './componentes/TaskList';
import AddTaskForm from './componentes/TaskForm';

function App() {
  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <AddTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
