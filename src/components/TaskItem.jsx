import React from "react";

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="taskitem">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className={task.completed ? "completed" : ""}>{task.title}</span>
      </div>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
