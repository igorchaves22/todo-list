import { useSelector } from "react-redux";
import { StoreRootStateType } from "~store";

export const useMain = () => {
    const { totalStateTasks, totalStoredTasks } = useSelector(({ todoList }: StoreRootStateType) => todoList.info);

    const hasTasks = totalStateTasks > 0;
    const notHasTasks = !hasTasks;

    return { totalStateTasks, totalStoredTasks, hasTasks, notHasTasks };
};
