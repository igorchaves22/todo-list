export type TaskListType = ITask[];
export type TaskPriorityType = "low" | "medium" | "high";

export interface ITask {
    id: number;
    info: {
        done: boolean;
        priority: TaskPriorityType;
    };
    content: {
        title: string;
    };
}
export interface ITodoList {
    info: {
        totalTasks: number;
    };
    tasks: TaskListType;
}
