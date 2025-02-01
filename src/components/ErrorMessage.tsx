import { renderElementIfTrue } from "~utils";

interface IErrorMessageProps {
    visibility: boolean;
    message?: string;
    textAlign?: string;
}

export const ErrorMessage = ({ visibility, message, textAlign }: IErrorMessageProps) => {
    return renderElementIfTrue(
        visibility,
        <p
            className={
                "w-full h-min absolute top-[calc(100%+0.25rem)] z-10 text-red-600 font-patrickHand text-sm" +
                ` ${textAlign ?? "text-left"}`
            }
        >
            {message}
        </p>
    );
};
