import { forwardRef } from "react";
import { InputPropsType } from "~types";
import { ErrorMessage } from "../ErrorMessage";

type InputPropsSubsetType = Omit<InputPropsType, "id" | "type" | "ref" | "className">;
type AdditionalProps = InputPropsSubsetType;

interface ITextInputProps extends AdditionalProps {
    title: string;
    errorMessage?: string;
}

export const TextInput = forwardRef<HTMLInputElement, ITextInputProps>(function TextInput(
    { title, errorMessage, ...rest },
    ref
) {
    return (
        <div className="w-full h-min relative flex flex-col gap-y-1">
            <label className="text-neutral-50 font-patrick-hand text-xl">{title}</label>
            <input
                type="text"
                ref={ref}
                className="w-full h-min py-2 px-3 rounded-md outline-none bg-purple-600/5 text-neutral-400 font-patrick-hand text-sm"
                {...rest}
            />
            <ErrorMessage isVisible={!!errorMessage} message={errorMessage} />
        </div>
    );
});
