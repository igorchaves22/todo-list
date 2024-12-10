import { TaskPriorityType } from "~types";
import { PhosphorIcon } from "../PhosphorIcon";

interface IPriorityIconProps {
    priority: TaskPriorityType;
}

export const PriorityIcon = ({ priority }: IPriorityIconProps) => {
    return (
        <PhosphorIcon
            icon="Flag"
            className={
                "text-base" +
                ` ${priority === "low" ? "text-green-600" : priority === "medium" ? "text-yellow-600" : priority === "high" ? "text-red-600" : "text-zinc-50"}`
            }
        />
    );
};
