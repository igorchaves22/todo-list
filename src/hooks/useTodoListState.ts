import { useSelector } from "react-redux";
import { StoreRootStateType } from "~store";

export const useTodoListState = () => {
    const { queryParams, info, tasks } = useSelector(({ todoList }: StoreRootStateType) => todoList);

    return { queryParams, info, tasks };
};
