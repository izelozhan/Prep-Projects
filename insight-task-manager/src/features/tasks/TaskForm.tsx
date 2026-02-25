import { useState } from "react";
import type { Task } from "../../types/task";
import { useTasks } from "./TaskContext";

export default function TaskForm(){
  const { addTask } = useTasks();

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Task["priority"]>("medium");

  function handleSubmit(e: any) {
    e.preventDefault();

    const newTask: Task = { 
      id: crypto.randomUUID(),
      title,
      completed: false,
      priority,
      tags: [],
      createdAt: Date.now(),
    };

    console.log("new task:", newTask);

    addTask(newTask);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Task</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" required></input>

      <select value={priority} onChange={(e) => setPriority(e.target.value as Task["priority"])}> 
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button type="submit">Add Task</button>

    </form>
  )



}

