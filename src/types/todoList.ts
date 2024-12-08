export type TaskListType = ITask[];

export interface ITask {
    id: number;
    info: {
        done: boolean;
        created: string;
        priority: "low" | "medium" | "high";
    };
    content: {
        title: string;
        description: string;
    };
}

export interface ITodoListType {
    tasks: ITask[];
}
