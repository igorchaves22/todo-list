import { forwardRef } from "react";
import { InputPropsType, TaskPriorityType } from "~types";
import { PriorityIcon } from "./PriorityIcon";

type AdditionalPropsType = Omit<InputPropsType, "id" | "type" | "value" | "ref" | "aria-label" | "className">;

interface IPriorityInputProps extends AdditionalPropsType {
    priority: TaskPriorityType;
}

const labelColorClassName = {
    low: "peer-checked:border-green-600 hover:shadow-md hover:shadow-green-600 hover:border-green-600",
    medium: "peer-checked:border-yellow-600 hover:shadow-md hover:shadow-yellow-600 hover:border-yellow-600",
    high: "peer-checked:border-red-600 hover:shadow-md hover:shadow-red-600 hover:border-red-600"
};

export const PriorityInput = forwardRef<HTMLInputElement, IPriorityInputProps>(({ priority, ...rest }, ref) => {
    const id = `priority-${priority}`;

    return (
        <section className="w-max h-min flex flex-col gap-y-1 items-center">
            <input
                id={id}
                type="radio"
                value={priority}
                ref={ref}
                aria-label={`Priority ${priority} input`}
                className="hidden peer"
                {...rest}
            />
            <label
                htmlFor={id}
                className={
                    "w-max h-min p-3 border-2 border-purple-600 rounded-[100%] bg-neutral-950 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1" +
                    ` ${labelColorClassName[priority]}`
                }
            >
                <PriorityIcon priority={priority} size="text-xl" />
            </label>
            <p className="w-full h-min text-neutral-50 font-patrickHand text-sm text-center">{priority}</p>
        </section>
    );
});
