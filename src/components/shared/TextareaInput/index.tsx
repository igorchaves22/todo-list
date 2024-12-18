import { forwardRef } from "react";
import { ErrorMessage } from "../ErrorMessage";

interface ITextareaInputProps {
    title: string;
    errorMessage?: string;
}

export const TextareaInput = forwardRef<HTMLTextAreaElement, ITextareaInputProps>(function TextareaInput(
    { title, errorMessage, ...rest },
    ref
) {
    return (
        <div className="w-full h-min relative flex flex-col gap-y-1">
            <label className="text-neutral-50 font-patrick-hand text-xl">{title}</label>
            <textarea
                ref={ref}
                className="w-full h-min max-h-48 py-2 px-3 rounded-md outline-none resize-y bg-purple-600/5 text-neutral-500 font-patrick-hand text-sm scrollbar-sm"
                {...rest}
            />
            <ErrorMessage isVisible={!!errorMessage} message={errorMessage} />
        </div>
    );
});
