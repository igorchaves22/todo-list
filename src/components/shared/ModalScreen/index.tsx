import { useEffect } from "react";
import { IChildren } from "~types";
import { ActionButton } from "../ActionButton";

type AdditionalProps = IChildren;

interface IModalScreenProps extends AdditionalProps {
    animation: "animate-backInDown" | "animate-backInUp";
    closeModalFn: () => void;
}

export const ModalScreen = ({ animation, closeModalFn, children }: IModalScreenProps) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "visible";
        };
    }, []);

    return (
        <section className="w-full h-screen p-4 fixed inset-0 z-50 grid grid-rows-1 grid-cols-1 place-content-center place-items-center bg-neutral-950/60 backdrop-blur-sm animate-fadeIn">
            <section
                className={
                    "w-full max-w-[68rem] h-[28rem] p-4 border-2 border-purple-600 rounded-md overflow-y-auto flex flex-col items-end bg-neutral-950 scrollbar-sm md:p-6" +
                    ` ${animation}`
                }
            >
                <ActionButton icon="X" iconSize="text-3xl" onClick={() => closeModalFn()} aria-label="Close modal" />
                {children}
            </section>
        </section>
    );
};
