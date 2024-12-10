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
export interface ITodoListType {
    queryParams: {
        search: string;
        filters: {
            done: boolean[];
            priority: TaskPriorityType[];
            dates: string[];
            times: string[];
        };
        pagination: {
            currentPage: number;
            totalPages: number;
        };
    };
    info: {
        totalStateTasks: number;
        totalStoredTasks: number;
    };
    tasks: TaskListType;
}
