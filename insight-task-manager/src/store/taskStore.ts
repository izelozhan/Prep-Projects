import type { Task } from "../types/task";

class TaskStore {
  private tasks = new Map<String, Task>();
  private tags = new Set<String>();

  getAllTasks(): Task[] {
    return Array.from(this.tasks.values());
  }

  getTask(id: String): Task | undefined {
    return this.tasks.get(id);
  }

  addTask(task: Task) {
    this.tasks.set(task.id, task);
    task.tags.forEach((tag) => this.tags.add(tag));
  }

  //partial means optional, take all the props of this object and make them optional, so when can only take specific fields we want to change, and ts not screaming us 

  updateTask(id: String, updates: Partial<Task>){
    const existing = this.tasks.get(id);
    if(!existing) return; 

    const updated = {...existing, ...updates};
    this.tasks.set(id, updated);

    updated.tags?.forEach((tag) => this.tags.add(tag));
  }

  deleteTask(id: String){
    this.tasks.delete(id);
  }

  getAllTags(): String[] {
    return Array.from(this.tags);
  }
}

export const taskStore = new TaskStore();

taskStore.addTask({
  id: "1",
  title: "Learn Map and Set",
  completed: false,
  priority: "high",
  tags: ["javascript", "cs"],
  createdAt: Date.now(),
});

taskStore.addTask({
  id: "2",
  title: "Build analytics",
  completed: false,
  priority: "medium",
  tags: ["react"],
  createdAt: Date.now(),
});