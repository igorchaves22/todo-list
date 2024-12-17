import { useTodoListState } from "./useTodoListState";

export const useTaskList = () => {
    const { tasks } = useTodoListState();

    return { tasks };
};
