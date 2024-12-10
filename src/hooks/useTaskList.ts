import { useMemo } from "react";
import { useSelector } from "react-redux";
import { StoreRootStateType } from "~store";
import { TODO_LIST_ITEMS_PER_PAGE } from "~utils";

export const useTaskList = () => {
    const { tasks } = useSelector(({ todoList }: StoreRootStateType) => todoList);

    const animationDelays = useMemo(() => {
        return Array.from({ length: TODO_LIST_ITEMS_PER_PAGE }, (_, index) => index / TODO_LIST_ITEMS_PER_PAGE);
    }, []);

    return { animationDelays, tasks };
};
