import { forwardRef } from "react";
import { ErrorMessage } from "~components";

interface ITextareaInput {
    label: string;
    hasError: boolean;
    errorMessage: string;
}

export const TextareaInput = forwardRef<HTMLTextAreaElement, ITextareaInput>(
    ({ label, hasError, errorMessage, ...rest }, ref) => {
        return (
            <div className="w-full h-min relative flex flex-col gap-y-1">
                <label className="text-neutral-50 font-patrick-hand text-xl">{label}</label>
                <textarea
                    ref={ref}
                    aria-label="Textarea input"
                    className="w-full h-min max-h-48 py-2 px-3 rounded-md outline-none resize-y bg-neutral-800 text-neutral-50 font-patrick-hand text-sm scrollbar-sm"
                    {...rest}
                />
                <ErrorMessage isVisible={hasError} message={errorMessage} />
            </div>
        );
    }
);
