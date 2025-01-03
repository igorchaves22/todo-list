import { useEffect } from "react";
import { ActionButton } from "~components";
import { IChildren } from "~types";
import { renderElementIfTrue } from "~utils";

type AdditionalPropsType = IChildren;

interface IModalScreen extends AdditionalPropsType {
    visibility: boolean;
    closeModalFn: () => void;
    animation: "animate-back-in-down" | "animate-back-in-up";
}

export const ModalScreen = ({ visibility, closeModalFn, animation, children }: IModalScreen) => {
    useEffect(() => {
        if (visibility) {
            const originalOverflowValue = document.body.style.overflow;

            document.body.style.overflow = "hidden";

            return () => {
                document.body.style.overflow = originalOverflowValue;
            };
        }
    }, [visibility]);

    return renderElementIfTrue(
        visibility,
        <section className="w-full h-screen p-4 fixed inset-0 z-50 flex justify-center items-center bg-neutral-950/60 backdrop-blur-sm animate-fade-in">
            <section
                className={
                    "w-full max-w-[68rem] h-[28rem] p-4 border-2 border-purple-600 rounded-md overflow-y-auto flex flex-col items-end bg-[url('~assets/image/background.webp')] bg-cover bg-center bg- scrollbar-sm" +
                    ` ${animation}`
                }
            >
                <ActionButton icon="X" iconSize="text-3xl" onClick={closeModalFn} aria-label="Close modal" />
                {children}
            </section>
        </section>
    );
};
