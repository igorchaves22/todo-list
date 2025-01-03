export type TaskListType = ITask[];
export type TaskPriorityType = "low" | "medium" | "high";

export interface ITask {
    id: number;
    info: {
        done: boolean;
        created: string;
        priority: TaskPriorityType;
    };
    content: {
        title: string;
        description: string;
    };
}
export interface ITodoList {
    queryParams: {
        search: string;
        pagination: {
            currentPage: number;
            totalPages: number;
        };
    };
    info: {
        totalStateTask: number;
        totalStoredTask: number;
    };
    tasks: TaskListType;
}
