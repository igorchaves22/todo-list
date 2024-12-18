import { useTodoListState } from "./useTodoListState";

export const useTaskList = () => {
    const {
        todoList: { tasks }
    } = useTodoListState();

    return { tasks };
};
