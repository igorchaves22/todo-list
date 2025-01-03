import { useTodoListState } from "./useTodoListState";

export const usePageContent = () => {
    const { data } = useTodoListState();

    const hasTasks = data.info.totalStateTask > 0;

    return { hasTasks };
};
