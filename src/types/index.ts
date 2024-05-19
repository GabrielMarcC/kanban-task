export interface Boards {
  boards: BoardsData[];
}

export type BoardsData = {
  name: string;
  columns: Columns[];
};

export type Columns = {
  name: string;
  tasks: Task[];
};

export type Task = {
  title: string;
  description: string;
  status: string;
  subtasks: Subtasks[];
};

export type Subtasks = {
  title: string;
  isCompleted: boolean;
};
