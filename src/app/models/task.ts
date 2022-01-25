export interface Task {
  id?: number;
  name: string;
  description: string;
  dueDate?: Date;
  isCompleted?: boolean;
}