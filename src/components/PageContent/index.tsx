import { usePageContent } from "~hooks";

export const PageContent = () => {
    const { hasTasks } = usePageContent();

    return (
        <main className="w-full h-min pt-2 px-4 pb-12 grid grid-rows-[min-content,1fr] grid-cols-[min(100%,90rem)] flex-grow gap-y-8 justify-center justify-items-center">
            <p className="w-max h-min text-neutral-50 font-patrick-hand">TASK SEARCH BAR</p>
            <section className="w-full h-min min-h-full grid grid-rows-[min-content,1fr] grid-cols-1 gap-y-2 place-items-center md:px-16">
                <p className="w-full h-min text-neutral-50 font-patrick-hand">TASK COUNT</p>
                {hasTasks ? (
                    <section className="w-full h-min min-h-full flex flex-col gap-y-5 justify-between">
                        <p className="w-full h-min text-neutral-50 font-patrick-hand">TASK LIST</p>
                        <p className="w-full h-min text-neutral-50 font-patrick-hand">PAGINATION CONTROLS</p>
                    </section>
                ) : (
                    <p className="w-max h-min text-neutral-50 font-patrick-hand">NOT HAS TASKS INDICATOR</p>
                )}
            </section>
        </main>
    );
};
