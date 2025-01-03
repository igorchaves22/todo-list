import { useTodoListState } from "~hooks";

export const TaskCount = () => {
    const {
        data: {
            info: { totalStateTask, totalStoredTask }
        }
    } = useTodoListState();

    return (
        <p className="w-full h-min text-neutral-400 font-patrick-hand text-sm">
            N° tasks: {totalStateTask} / {totalStoredTask}
        </p>
    );
};
