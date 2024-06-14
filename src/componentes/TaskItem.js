import React, { useState } from 'react';

function TaskItem({ title }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <span style={{ textDecoration: checked ? 'line-through' : 'none' }}>{title}</span>
    </div>
  );
}

export default TaskItem;
