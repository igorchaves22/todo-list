import { forwardRef } from "react";
import { ITask, InputPropsType } from "~types";
import { PriorityIcon } from "../PriorityIcon";

type TaskSubsetPropsType = Pick<ITask["info"], "priority">;
type InputSubsetPropsType = Omit<InputPropsType, "id" | "type" | "value" | "ref" | "className">;
type AdditionalProps = TaskSubsetPropsType & InputSubsetPropsType;

interface IPriorityInputProps extends AdditionalProps {}

const labelColorClassName = {
    low: "peer-checked:bg-neutral-950 peer-checked:border-green-600 hover:shadow-md hover:shadow-green-600 hover:border-green-600",
    medium: "peer-checked:bg-neutral-950 peer-checked:border-yellow-600 hover:shadow-md hover:shadow-yellow-600 hover:border-yellow-600",
    high: "peer-checked:bg-neutral-950 peer-checked:border-red-600 hover:shadow-md hover:shadow-red-600 hover:border-red-600"
};

export const PriorityInput = forwardRef<HTMLInputElement, IPriorityInputProps>(function PriorityInput(
    { priority, ...rest },
    ref
) {
    const id = `priority-${priority}`;

    return (
        <div className="w-max h-min">
            <input id={id} type="radio" value={priority} ref={ref} className="[display:none] peer" {...rest} />
            <label
                htmlFor={id}
                className={
                    "w-max h-min p-3 border-2 border-purple-600 rounded-[100%] flex bg-purple-600/5 transition-all duration-300 ease-in-out cursor-pointer group hover:-translate-y-1" +
                    ` ${labelColorClassName[priority]}`
                }
            >
                <PriorityIcon priority={priority} size="text-2xl" />
            </label>
        </div>
    );
});
