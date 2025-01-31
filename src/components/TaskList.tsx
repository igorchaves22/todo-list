import { useTaskList } from "~hooks";
import { TaskCard } from "./TaskCard";

export const TaskList = () => {
    const { tasks, itemAnimationDelays } = useTaskList();

    return (
        <ul className="w-full h-min grid auto-rows-min grid-cols-[repeat(auto-fill,minmax(0,14rem))] grow gap-8 justify-center">
            {tasks.map((item, index) => (
                <TaskCard key={item.id} animationDelay={itemAnimationDelays(index)} data={item} />
            ))}
        </ul>
    );
};
