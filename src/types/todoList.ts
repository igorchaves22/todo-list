export type TaskListType = ITask[];

export interface ITask {
    id: number;
    info: {
        done: boolean;
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
