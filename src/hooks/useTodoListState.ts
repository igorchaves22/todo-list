import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreRootStateType, actions } from "~store";
import { ITask } from "~types";

export const useTodoListState = () => {
    const dispatch = useDispatch();
    const { addTask } = actions;
    const state = useSelector(({ todoList }: StoreRootStateType) => todoList);

    const dispatchAddTask = useCallback(
        (data: ITask) => {
            dispatch(addTask(data));
        },
        [dispatch, addTask]
    );

    return { state, dispatch: { dispatchAddTask } };
};
