import { useTaskList } from "~hooks";
import { TaskCard } from "../TaskCard";

export const TaskList = () => {
    const { animationDelays, tasks } = useTaskList();

    return (
        <ul className="w-full h-min min-h-52 grid auto-rows-min grid-cols-[repeat(auto-fill,minmax(0,15rem))] gap-y-8 gap-x-10 justify-center">
            {tasks.map((item, index) => (
                <TaskCard key={item.id} animationDelay={animationDelays[index]} {...item} />
            ))}
        </ul>
    );
};
