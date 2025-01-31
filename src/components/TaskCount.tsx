import { useTodoListState } from "~hooks";

export const TaskCount = () => {
    const {
        state: {
            info: { totalTasks }
        }
    } = useTodoListState();

    return <p className="w-full h-min text-neutral-400 font-patrickHand text-sm">N° tasks: {totalTasks}</p>;
};
