import { forwardRef } from "react";
import { InputPropsType } from "~types";
import { ErrorMessage } from "./ErrorMessage";

type AdditionalPropsType = Omit<InputPropsType, "id" | "type" | "ref" | "className">;

interface ITextInputProps extends AdditionalPropsType {
    label: string;
    errorMessage?: string;
}

export const TextInput = forwardRef<HTMLInputElement, ITextInputProps>(({ label, errorMessage, ...rest }, ref) => {
    return (
        <section className="w-full h-min relative flex flex-col gap-y-2">
            <label className="text-neutral-50 font-patrickHand text-xl">{label}</label>
            <input
                type="text"
                ref={ref}
                aria-label="Text input"
                className="w-full h-min py-2 px-3 rounded outline-none bg-neutral-800 text-neutral-400 font-patrickHand text-sm placeholder:text-neutral-500"
                {...rest}
            />
            <ErrorMessage visibility={!!errorMessage} message={errorMessage} />
        </section>
    );
});
