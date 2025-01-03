import { useSelector } from "react-redux";
import { StoreRootStateType } from "~store";

export const useTodoListState = () => {
    const data = useSelector(({ todoList }: StoreRootStateType) => todoList);

    return {
        data
    };
};
