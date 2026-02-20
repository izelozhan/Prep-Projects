import { useTasks } from "./useTasks";

export default function TaskList(){
  const { existingTasks } = useTasks();

  return (
    <div> 
      <h2>Tasks</h2>
      <ul>
        {existingTasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.priority}
          </li>
        ))}
      </ul>
    </div>
  )
}