import { useDispatch, useSelector } from "react-redux";
import { StoreRootStateType } from "~store";

export const useTodoListState = () => {
    const dispatch = useDispatch();
    const { todoList } = useSelector((state: StoreRootStateType) => state);

    return { dispatch, todoList };
};
