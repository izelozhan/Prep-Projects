// import { useEffect, useState } from "react";
// import { taskStore } from "../../store/taskStore";
// import type  { Task } from "../../types/task";

// export function useTasks() {
//   const [ tasks, setTasks] = useState<Task[]>([]);

//   function addTask(task: Task) {
//     taskStore.addTask(task);
//     setTasks(taskStore.getAllTasks());
    
//   }

//   useEffect(() => {
//     setTasks(taskStore.getAllTasks());  
//   }, []);

//   return { tasks, addTask };
// }