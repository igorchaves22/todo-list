import { forwardRef } from "react";
import { ErrorMessage } from "~components";
import { InputPropsType } from "~types";

type InputSubsetPropsType = Omit<InputPropsType, "id" | "type" | "ref" | "className">;
type AdditionalProps = InputSubsetPropsType;

interface IPriorityInput extends AdditionalProps {
    label: string;
    hasError: boolean;
    errorMessage: string;
}

export const TextInput = forwardRef<HTMLInputElement, IPriorityInput>(
    ({ label, hasError, errorMessage, ...rest }, ref) => {
        return (
            <div className="w-full h-min relative flex flex-col gap-y-1">
                <label className="text-neutral-50 font-patrick-hand text-xl">{label}</label>
                <input
                    type="text"
                    ref={ref}
                    aria-label="Text input"
                    className="w-full h-min py-2 px-3 rounded-md outline-none bg-neutral-800 text-neutral-50 font-patrick-hand text-sm"
                    {...rest}
                />
                <ErrorMessage isVisible={hasError} message={errorMessage} />
            </div>
        );
    }
);
