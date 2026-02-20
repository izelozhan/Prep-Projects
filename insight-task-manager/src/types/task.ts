export type Task = { 
  id: string;
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  dueDate?: string;
  tags: string[];
  createdAt: number;
}