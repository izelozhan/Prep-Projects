import { useEffect, useState } from "react";
import { taskStore } from "../../store/taskStore";
import type { Task } from "../../types/task";

export function useTasks(){
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(taskStore.getAllTasks());
  }, []);

  const createNewTask = (task:Task) => {
      taskStore.addTask(task);
      setTasks(taskStore.getAllTasks());
  }

  return {
    existingTasks: tasks, 
    createNewTask
  };
}