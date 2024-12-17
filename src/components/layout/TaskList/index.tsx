import { useTaskList } from "~hooks";
import { itemAnimationDelays } from "~utils";
import { TaskCard } from "../TaskCard";

export const TaskList = () => {
    const { tasks } = useTaskList();

    return (
        <ul className="w-full h-min min-h-52 grid auto-rows-min grid-cols-[repeat(auto-fill,minmax(0,16rem))] gap-y-12 gap-x-8 justify-center">
            {tasks.map((item, index) => (
                <TaskCard key={item.id} animationDelay={itemAnimationDelays[index]} {...item} />
            ))}
        </ul>
    );
};
