import { useTodoListState } from "./useTodoListState";

const MIN_NUM_TASKS = 1;

export const useTodoListLayout = () => {
    const {
        state: {
            info: { totalTasks }
        }
    } = useTodoListState();

    const hasTasks = totalTasks >= MIN_NUM_TASKS;

    return { hasTasks };
};
