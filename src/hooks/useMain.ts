import { useTodoListState } from "./useTodoListState";

export const useMain = () => {
    const {
        todoList: {
            info: { totalStateTask, totalStoredTask }
        }
    } = useTodoListState();

    const hasTasks = totalStateTask > 0;
    const notHasTasks = !hasTasks;

    return { totalStateTask, totalStoredTask, hasTasks, notHasTasks };
};
