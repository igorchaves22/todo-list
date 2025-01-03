import { forwardRef } from "react";
import { PriorityIcon } from "~components";
import { ITask, InputPropsType } from "~types";

type TaskSubsetPropsType = Pick<ITask["info"], "priority">;
type InputSubsetPropsType = Omit<InputPropsType, "id" | "type" | "value" | "ref" | "className">;
type AdditionalProps = TaskSubsetPropsType & InputSubsetPropsType;

interface IPriorityInput extends AdditionalProps {}

const labelColorClassName = {
    low: "peer-checked:border-green-600 hover:shadow-md hover:shadow-green-600 hover:border-green-600",
    medium: "peer-checked:border-yellow-600 hover:shadow-md hover:shadow-yellow-600 hover:border-yellow-600",
    high: "peer-checked:border-red-600 hover:shadow-md hover:shadow-red-600 hover:border-red-600"
};

export const PriorityInput = forwardRef<HTMLInputElement, IPriorityInput>(({ priority, ...rest }, ref) => {
    const id = `priority-${priority}`;

    return (
        <div className="w-max h-min">
            <input
                id={id}
                type="radio"
                value={priority}
                ref={ref}
                aria-label="Priority input"
                className="[display:none] peer"
                {...rest}
            />
            <label
                htmlFor={id}
                className={
                    "w-max h-min p-3 border-2 border-purple-600 rounded-[100%] flex bg-neutral-950 transition-all duration-300 ease-in-out cursor-pointer group hover:-translate-y-1" +
                    ` ${labelColorClassName[priority]}`
                }
            >
                <PriorityIcon priority={priority} size="text-xl" />
            </label>
        </div>
    );
});
