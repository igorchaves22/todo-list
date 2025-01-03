import { useTodoListState } from "~hooks";
import { TaskCard } from "../TaskCard";
import { itemAnimationDelays } from "~utils";

export const TaskList = () => {
    const {
        data: { tasks }
    } = useTodoListState();

    return (
        <ul className="w-full h-min min-h-52 grid auto-rows-min grid-cols-[repeat(auto-fill,minmax(0,16rem))] gap-y-8 gap-x-8 justify-center">
            {tasks.map((item, index) => (
                <TaskCard key={item.id} animationDelay={itemAnimationDelays[index]} task={item} />
            ))}
        </ul>
    );
};
