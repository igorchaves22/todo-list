import { ButtonPropsType, IPhosphorIcon } from "~types";
import { renderElementIfTrue } from "~utils";
import { PhosphorIcon } from "../PhosphorIcon";

type PartialPhosphorIcon = Partial<IPhosphorIcon>;
type ButtonSubsetPropsType = Pick<ButtonPropsType, "type" | "aria-label" | "disabled" | "onClick">;
type AdditionalProps = PartialPhosphorIcon & ButtonSubsetPropsType;

interface IActionButtonProps extends AdditionalProps {
    text?: string;
    color?: string;
    iconSize?: string;
    iconAnimation?: "rotate" | "up";
}

const iconAnimationClassName = {
    rotate: "group-hover:rotate-[360deg]",
    up: "group-hover:-translate-y-1"
};

export const ActionButton = ({ text, icon, color, iconSize, iconAnimation, ...rest }: IActionButtonProps) => {
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
                            : `transition-all duration-500 ease-in-out group-hover:text-purple-600 ${color ?? "text-zinc-50"} ${iconSize ?? "text-sm"}` +
                              (iconAnimation ? ` ${iconAnimationClassName[iconAnimation]}` : "")
                    }
                />
            )}
        </button>
        // <button
        //     type="button"
        //     className={
        //         "w-max h-min flex gap-x-1 items-center" +
        //         ` ${rest.disabled ? "scale-95" : "transition-all duration-200 ease-in-out group active:scale-75"}`
        //     }
        //     {...rest}
        // >
        //     {renderElementIfTrue(
        //         !!text,
        //         <span
        //             className={
        //                 "font-patrickHand text-base" +
        //                 ` ${rest.disabled ? "text-zinc-500" : `transition-all duration-500 ease-in-out group-hover:text-purple-600 ${color ?? "text-zinc-50"}`}`
        //             }
        //         >
        //             {text}
        //         </span>
        //     )}
        //     {renderElementIfTrue(
        //         !!icon,
        //         <PhosphorIcon
        //             icon={icon!}
        //             className={
        //                 rest.disabled
        //                     ? "text-zinc-500"
        //                     : `transition-all duration-500 ease-in-out group-hover:text-purple-600 ${color ?? "text-zinc-50"} ${iconSize ?? "text-sm"} ${iconAnimation === "rotate" ? "group-hover:rotate-[360deg]" : iconAnimation === "up" ? "group-hover:-translate-y-1" : ""}`
        //             }
        //         />
        //     )}
        // </button>
    );
};
