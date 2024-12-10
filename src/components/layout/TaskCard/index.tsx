import { ActionButton, PriorityIcon } from "~components/shared";
import { ITask } from "~types";

type AdditionalProps = ITask;

interface ITaskCardProps extends AdditionalProps {
    animationDelay: number;
}

export const TaskCard = ({ animationDelay, info, content }: ITaskCardProps) => {
    return (
        <li
            style={{
                animationDelay: `${animationDelay}s`
            }}
            className="w-full h-min py-1 pl-6 pr-4 border-2 border-purple-600 rounded-md opacity-0 relative grid auto-rows-min grid-cols-[1fr,repeat(4,max-content)] gap-x-2 items-center bg-zinc-950 transition-all duration-200 ease-in-out animate-slideInLeft hover:shadow-md hover:shadow-purple-600"
        >
            <div className="w-max h-min p-2 border-2 border-purple-600 rounded-[100%] absolute top-1/2 right-[95%] z-[2] bg-zinc-950 transform -translate-y-1/2">
                <PriorityIcon priority={info.priority} />
            </div>
            <p className="w-full h-min text-zinc-50 font-patrickHand text-base truncate">{content.title}</p>
            <ActionButton
                icon={info.done ? "Checks" : "Check"}
                color={info.done ? "text-green-600" : "text-zinc-500"}
                iconAnimation="up"
            />
            <ActionButton icon="ClipboardText" color="text-zinc-500" iconAnimation="up" />
            <ActionButton icon="Pencil" color="text-zinc-500" iconAnimation="up" />
            <ActionButton icon="Trash" color="text-zinc-500" iconAnimation="up" />
        </li>
    );
};
