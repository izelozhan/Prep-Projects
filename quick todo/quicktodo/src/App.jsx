import { useEffect, useState } from "react";

import "./App.css";

const mockTasks = [
  {
    id: 1,
    title: "Buy groceries",
    completed: false,
  },
  {
    id: 2,
    title: "Walk the dog",
    completed: true,
  },
];

function App() {
  const [tasks, setTasks] = useState(mockTasks);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`someURL`);
      const parsedData = await data.json();
      setData(data);
    };

    fetchData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function taskCompleted(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  return (
    <>
      <div className="app-container">
        <header className="profile-container" style={{ display: "flex" }}>
          <img
            src={"https://cataas.com/cat"}
            alt="profilePicture"
            className="profilePicture"
          />
        </header>
        <main className="container">
          <h1>Quick To Do App Idea</h1>
          <p>Please start enter your tasks below!</p>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  type="text"
                  placeholder="Enter your task here.."
                />
                <button type="submit">Add Task</button>
              </div>
            </form>
          </div>
          <div className="taskList-container">
            {tasks.length > 0 ? (
              <ul>
                {tasks.map((task) => (
                  <li key={task.title}>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => taskCompleted(task.id)}
                    />
                    <span>{task.title}</span>
                    <button onClick={() => deleteTask(task.id)}>
                      Delete Task
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No tasks yet.</p>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
