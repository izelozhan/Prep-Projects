import AppLayout from "./app/AppLayout";
import { TaskProvider } from "./features/tasks/TaskContext";
import TaskForm from "./features/tasks/TaskForm";
import TaskList from "./features/tasks/TaskList";

function App() {

  return (
    <TaskProvider>
      <AppLayout>
        <TaskForm />
        <TaskList />
        
      </AppLayout>  
    </TaskProvider>
  )
}

export default App
