import { useTasks } from "./TaskContext";

export default function TaskList() {
  const { tasks, izel } = useTasks();

  izel();
  console.log("hook data:", tasks);

  if (!tasks || !Array.isArray(tasks)) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.priority}
          </li>
        ))}
      </ul>
    </div>
  );
}