import { ActionButton, PriorityIcon } from "~components/shared";
import { ITask } from "~types";

type AdditionalProps = ITask;

interface ITaskCardProps extends AdditionalProps {
    animationDelay: number;
    toggleTaskDoneFn: (id: number) => void;
    removeTaskFn: (id: number) => void;
}

export const TaskCard = ({ animationDelay, toggleTaskDoneFn, removeTaskFn, id, info, content }: ITaskCardProps) => {
    return (
        <li
            style={{
                animationDelay: `${animationDelay}s`
            }}
            className="w-full h-min py-1 pr-4 pl-8 border-2 border-purple-600 rounded-md opacity-0 relative grid auto-rows-min grid-cols-[1fr,max-content] gap-x-4 items-center bg-neutral-950 animate-slideInLeft"
        >
            <div className="w-max h-min p-2 border-2 border-purple-600 rounded-[100%] absolute top-1/2 left-0 bg-neutral-950 transform -translate-y-1/2 -translate-x-1/2">
                <PriorityIcon priority={info.priority} size="text-lg" />
            </div>
            <p className="w-full h-min text-neutral-50 font-patrick-hand text-base truncate">{content.title}</p>
            <section className="w-full h-min flex gap-x-2 items-center">
                <ActionButton
                    icon={info.done ? "Checks" : "Check"}
                    color={info.done ? "text-green-600" : undefined}
                    iconSize="text-base"
                    iconAnimation="up"
                    aria-label="Toggle task done"
                    onClick={() => toggleTaskDoneFn(id)}
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
                    onClick={() => removeTaskFn(id)}
                />
            </section>
        </li>
    );
};
