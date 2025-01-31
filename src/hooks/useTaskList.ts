import { useCallback } from "react";
import { divideTwoNumbers } from "~utils";
import { useTodoListState } from "./useTodoListState";

export const useTaskList = () => {
    const {
        state: {
            info: { totalTasks },
            tasks
        }
    } = useTodoListState();

    const itemAnimationDelays = useCallback(
        (index: number) => {
            return divideTwoNumbers(index, totalTasks);
        },
        [totalTasks]
    );

    return { tasks, itemAnimationDelays };
};
