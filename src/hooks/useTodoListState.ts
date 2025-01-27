import { useSelector } from "react-redux";
import { StoreRootStateType } from "~store";

export const useTodoListState = () => {
    const state = useSelector(({ todoList }: StoreRootStateType) => todoList);

    return { state };
};
