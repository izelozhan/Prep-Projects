import { createContext, useContext, useState } from "react";
import type { Task } from "../../types/task";

type TaskContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  izel: () => void;
};

const TaskContext = createContext<TaskContextType | null>(null);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Learn Context",
      completed: false,
      priority: "high",
      tags: [],
      createdAt: Date.now(),
    },
  ]);

  function addTask(task: Task) {
    setTasks((prev) => [...prev, task]);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        izel: () => {
          console.log("izel function called");
        },
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used inside TaskProvider");
  return context;
}
