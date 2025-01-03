import { PhosphorIcon } from "~components";
import { ButtonPropsType, PhosphorIconsLibraryKeyType } from "~types";
import { renderElementIfTrue } from "~utils";

type ButtonSubsetPropsType = Pick<ButtonPropsType, "type" | "aria-label" | "disabled" | "onClick">;
type AdditionalPropsType = ButtonSubsetPropsType;

interface IActionButton extends AdditionalPropsType {
    text?: string;
    icon?: PhosphorIconsLibraryKeyType;
    color?: string;
    iconSize?: string;
    iconAnimation?: "rotate" | "up";
}

const iconAnimationClassName = {
    rotate: "group-hover:rotate-[360deg]",
    up: "group-hover:-translate-y-1"
};

export const ActionButton = ({ text, icon, color, iconSize, iconAnimation, ...rest }: IActionButton) => {
    return (
        <button
            type="button"
            className={
                "w-max h-min flex gap-x-1 items-center" +
                ` ${rest.disabled ? "scale-95" : "transition-all duration-200 ease-in-out group active:scale-75"}`
            }
            {...rest}
        >
            {renderElementIfTrue(
                !!text,
                <span
                    className={
                        "font-patrick-hand text-base" +
                        ` ${rest.disabled ? "text-neutral-400" : `transition-all duration-500 ease-in-out group-hover:text-purple-600 ${color ?? "text-neutral-50"}`}`
                    }
                >
                    {text}
                </span>
            )}
            {renderElementIfTrue(
                !!icon,
                <PhosphorIcon
                    icon={icon!}
                    className={
                        rest.disabled
                            ? "text-neutral-400"
                            : `transition-all duration-500 ease-in-out group-hover:text-purple-600 ${color ?? "text-neutral-50"} ${iconSize ?? "text-sm"}` +
                              (iconAnimation ? ` ${iconAnimationClassName[iconAnimation]}` : "")
                    }
                />
            )}
        </button>
    );
};
