import { renderElementIfTrue } from "~utils";

interface IErrorMessage {
    isVisible: boolean;
    message?: string;
    textAlign?: string;
}

export const ErrorMessage = ({ isVisible, message, textAlign }: IErrorMessage) => {
    return renderElementIfTrue(
        isVisible,
        <p
            className={
                "w-full h-min absolute top-[calc(100%+0.25rem)] z-10 text-red-600 font-patrick-hand text-sm" +
                ` ${textAlign ?? "text-left"}`
            }
        >
            {message}
        </p>
    );
};
