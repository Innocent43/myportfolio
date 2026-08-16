import React from "react";
import { useState, useEffect } from "react";
import TaskItem from "../components/TaskItem";
import { data } from "react-router-dom";

function Tasks() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
        setLoading(false);
      });
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newTask = {
      id: Date.now(),
      title: input,
      completed: false,
    };
    setTask([...task, newTask]);
    setInput("");
  };

  const handleToggle = (id) => {
    setTask(
      task.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  const handleDelete = (id) => {
    setTask(task.filter((item) => item.id !== id));
  };

  const remaing = task.filter((item) => !item.completed).length;
  if (loading) return <h1>Loading....</h1>;
  return (
    <div className="Task-list" id="task">
      <p>{remaing}</p>
      <form action="" onSubmit={handleAdd}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>addtodo</button>
      </form>

      <div className="tasklistwrap">
        {task.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tasks;
