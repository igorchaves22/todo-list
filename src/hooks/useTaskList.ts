import { useCallback } from "react";
import { removeTask, toggleTaskDone } from "~store";
import { useTodoListState } from "./useTodoListState";

export const useTaskList = () => {
    const {
        dispatch,
        todoList: { tasks }
    } = useTodoListState();

    const handleClickToggleTaskDone = useCallback(
        (id: number) => {
            dispatch(toggleTaskDone(id));
        },
        [dispatch]
    );
    const handleClickRemoveTask = useCallback(
        (id: number) => {
            dispatch(removeTask(id));
        },
        [dispatch]
    );

    return { tasks, handleClickToggleTaskDone, handleClickRemoveTask };
};
