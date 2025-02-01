import { PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import { ButtonPropsType, PhosphorIconsLibraryItemsKeyType } from "~types";
import { renderElementIfTrue } from "~utils";
import { ActionButton } from "./ActionButton";

type AdditionalPropsType = PropsWithChildren;

interface IOverlayModalProps extends AdditionalPropsType {
    button: {
        text?: string;
        icon?: PhosphorIconsLibraryItemsKeyType;
        color?: string;
        iconSize?: string;
        iconAnimation?: "rotate" | "up";
    } & Pick<ButtonPropsType, "aria-label">;
    modal: {
        isVisible: boolean;
        toggleIsVisible: () => void;
        animation: "animate-backInDown" | "animate-backInUp";
    };
}

export const OverlayModal = ({ button, modal, children }: IOverlayModalProps) => {
    useEffect(() => {
        if (modal.isVisible) {
            const originalOverflowValue = document.body.style.overflow;

            document.body.style.overflow = "hidden";

            return () => {
                document.body.style.overflow = originalOverflowValue;
            };
        }
    }, [modal.isVisible]);

    return (
        <>
            <ActionButton
                text={button?.text}
                icon={button?.icon}
                iconSize="text-lg"
                iconAnimation={button?.iconAnimation}
                aria-label="Open modal"
                onClick={modal.toggleIsVisible}
                {...button}
            />
            {renderElementIfTrue(
                modal.isVisible,
                createPortal(
                    <section className="w-full h-screen p-4 fixed inset-0 z-50 flex justify-center items-center bg-neutral-950/60 backdrop-blur-sm animate-fadeIn">
                        <section
                            className={
                                "w-full max-w-[68rem] h-[28rem] p-4 border-2 border-purple-600 rounded-md overflow-y-auto flex flex-col gap-y-4 items-end bg-neutral-950 bg-[url('~assets/image/background.png')] bg-cover scrollbar" +
                                ` ${modal.animation}`
                            }
                        >
                            <ActionButton
                                icon="X"
                                iconSize="text-3xl"
                                aria-label="Close modal"
                                onClick={modal.toggleIsVisible}
                            />
                            {children}
                        </section>
                    </section>,
                    document.body
                )
            )}
        </>
    );
};
