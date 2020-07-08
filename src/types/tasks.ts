
export type Task = {
    Id: number;
    Title: string;
    Description: string;
    CreationDate: string;
    Points: number;
    ImagePath: string;
    CategoryId: number;
    TypeId: number;
};

export type TasksCategory = {
    Id: number;
    Category: string;
}

export type TasksType = {
    Id: number;
    Type: string;
}

export type TTasksState = {
    isLoading: boolean;
    tasks: Task[];
    tasksCategories: TasksCategory[],
    tasksTypes: TasksType[],
    success: string;
  };