import { ITask } from "~types";
import { ActionButton } from "./ActionButton";
import { PriorityIcon } from "./PriorityIcon";

interface ITaskCardProps {
    animationDelay: number;
    data: ITask;
}

export const TaskCard = ({ animationDelay, data }: ITaskCardProps) => {
    return (
        <li
            style={{
                animationDelay: `${animationDelay}s`
            }}
            className="w-full h-min py-1 pl-8 pr-4 rounded-md opacity-0 relative grid auto-rows-min grid-cols-[1fr_max-content] gap-x-4 items-center bg-neutral-900 animate-slideInLeft"
        >
            <div className="w-max h-min p-2 border-2 border-neutral-900 rounded-[100%] absolute top-1/2 left-0 bg-neutral-950 transform -translate-y-1/2 -translate-x-1/2">
                <PriorityIcon priority={data.info.priority} size="text-xl" />
            </div>
            <p className="w-full h-min text-neutral-50 font-patrickHand text-base truncate">{data.content.title}</p>
            <section className="w-full h-min flex gap-x-2 justify-center items-center">
                <ActionButton
                    icon={data.info.done ? "Checks" : "Check"}
                    color={data.info.done ? "text-green-600" : "text-neutral-400"}
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
