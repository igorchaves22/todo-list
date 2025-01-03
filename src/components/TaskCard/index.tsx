import { ActionButton, PriorityIcon } from "~components";
import { ITask } from "~types";

interface ITaskCard {
    animationDelay: number;
    task: ITask;
}

export const TaskCard = ({ animationDelay, task }: ITaskCard) => {
    return (
        <li
            style={{
                animationDelay: `${animationDelay}s`
            }}
            className="w-full h-min py-1 pr-4 pl-8 rounded opacity-0 relative grid auto-rows-min grid-cols-[1fr,max-content] gap-x-4 items-center bg-neutral-900 animate-render-task-card"
        >
            <div className="w-max h-min p-2 border-2 border-neutral-900 rounded-[100%] absolute top-1/2 left-0 bg-neutral-950 transform -translate-y-1/2 -translate-x-1/2">
                <PriorityIcon priority={task.info.priority} size="text-xl" />
            </div>
            <p className="w-full h-min text-neutral-50 font-patrick-hand text-base truncate">{task.content.title}</p>
            <section className="w-full h-min flex gap-x-2 items-center">
                <ActionButton
                    icon={task.info.done ? "Checks" : "Check"}
                    color={task.info.done ? "text-green-600" : undefined}
                    iconSize="text-base"
                    iconAnimation="up"
                    aria-label="Toggle task done"
                />
                <ActionButton
                    icon="ClipboardText"
                    color="text-neutral-400"
                    iconSize="text-base"
                    iconAnimation="up"
                    aria-label="View task details"
                />
                <ActionButton
                    icon="Pencil"
                    color="text-neutral-400"
                    iconSize="text-base"
                    iconAnimation="up"
                    aria-label="Edit task"
                />
                <ActionButton
                    icon="Trash"
                    color="text-neutral-400"
                    iconSize="text-base"
                    iconAnimation="up"
                    aria-label="Remove task"
                />
            </section>
        </li>
    );
};
