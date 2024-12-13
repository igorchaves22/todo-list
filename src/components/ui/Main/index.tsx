import { AddTaskBox, PageControls, SearchTaskForm, TaskList } from "~components/layout";
import { ResetQueryParamsButton } from "~components/shared";
import { useMain } from "~hooks";
import { renderElementIfTrue } from "~utils";

export const Main = () => {
    const { totalStateTask, totalStoredTask, hasTasks, notHasTasks } = useMain();

    return (
        <main className="w-full h-min p-4 pb-14 grid grid-rows-[min-content,1fr] grid-cols-max-layout flex-grow gap-y-6 justify-center justify-items-center">
            <section className="w-full h-min flex flex-col gap-y-8 items-center">
                <SearchTaskForm />
                <section className="w-full h-min flex flex-wrap gap-y-2 gap-x-8 justify-center">
                    <AddTaskBox />
                    <ResetQueryParamsButton />
                </section>
            </section>
            <section className="w-full h-min min-h-full grid grid-rows-[min-content,1fr] grid-cols-1 gap-y-4 items-center md:w-[90%]">
                <p className="w-full h-min text-zinc-400 font-patrick-hand text-base">
                    N° tasks: {totalStateTask} / {totalStoredTask}
                </p>
                {renderElementIfTrue(
                    hasTasks,
                    <section className="w-full h-min min-h-full flex flex-col gap-y-4 justify-between">
                        <TaskList />
                        <PageControls />
                    </section>
                )}
                {renderElementIfTrue(
                    notHasTasks,
                    <p className="text-zinc-50 font-patrickHand text-sm text-center">NOT HAS TASKS INDICATOR</p>
                )}
            </section>
        </main>
    );
};
