import { PhosphorIcon } from "~components";
import { TaskPriorityType } from "~types";

interface IPriorityIcon {
    priority: TaskPriorityType;
    size?: string;
}

const priorityColorClassName = {
    low: "text-green-600",
    medium: "text-yellow-600",
    high: "text-red-600"
};

export const PriorityIcon = ({ priority, size }: IPriorityIcon) => {
    return <PhosphorIcon icon="Flag" className={`${priorityColorClassName[priority]} ${size ?? "text-base"}`} />;
};
