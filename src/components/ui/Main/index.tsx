import { NotHasTasksIndicator } from "~components/shared";
import { useMain } from "~hooks";
import { renderElementIfTrue } from "~utils";

export const Main = () => {
    const { totalStateTasks, totalStoredTasks, hasTasks, notHasTasks } = useMain();

    return (
        <main className="w-full h-min p-4 pb-14 grid auto-rows-min grid-cols-max-layout flex-grow gap-y-12 justify-center content-start place-items-center bg-zinc-950">
            <section className="w-full h-min flex flex-col gap-y-4 items-center">
                <p className="w-full h-min text-zinc-50 font-patrickHand text-sm text-center">SEARCH BAR</p>
                <section className="w-full h-min flex flex-wrap gap-x-6 gap-y-2 items-center">
                    <p className="w-full h-min text-zinc-50 font-patrickHand text-sm text-center">FILTERS</p>
                </section>
            </section>
            <section className="w-full h-min flex flex-col gap-y-4 justify-between content-between place-items-center md:w-[90%]">
                <p className="w-full h-min text-zinc-500 font-patrickHand text-sm">
                    N° tasks: {totalStateTasks} / {totalStoredTasks}
                </p>
                {renderElementIfTrue(
                    hasTasks,
                    <>
                        <p className="w-full h-min text-zinc-50 font-patrickHand text-sm text-center">TASK LIST</p>
                        <p className="w-full h-min text-zinc-50 font-patrickHand text-sm text-center">
                            PAGINATION CONTROLS
                        </p>
                    </>
                )}
                {renderElementIfTrue(notHasTasks, <NotHasTasksIndicator />)}
            </section>
        </main>
    );
};
