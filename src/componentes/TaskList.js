import React from 'react';
import TaskItem from './TaskItem';

const tasks = [
  { id: 1, title: 'Hacer la compra' },
  { id: 2, title: 'Estudiar para el examen' },
  { id: 3, title: 'Preparar la comida' }
];

function TaskList() {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} title={task.title} />
      ))}
    </div>
  );
}

export default TaskList;
