import {
    NotHasTasksIndicator,
    PaginationControls,
    ResetQueryParamsButton,
    TaskCount,
    TaskList,
    TaskSearchBar
} from "~components";
import { usePageContent } from "~hooks";

export const PageContent = () => {
    const { hasTasks } = usePageContent();

    return (
        <main className="w-full h-min pt-2 px-4 pb-12 grid grid-rows-[min-content,1fr] grid-cols-[min(100%,90rem)] flex-grow gap-y-8 justify-center">
            <section className="w-full h-min flex flex-col gap-y-6 items-center">
                <TaskSearchBar />
                <section className="w-full h-min flex flex-wrap gap-x-4 justify-center">
                    <ResetQueryParamsButton />
                </section>
            </section>
            <section className="w-full h-min min-h-full grid grid-rows-[min-content,1fr] grid-cols-1 gap-y-2 place-items-center md:px-16">
                <TaskCount />
                {hasTasks ? (
                    <section className="w-full h-min min-h-full flex flex-col gap-y-5 justify-between">
                        <TaskList />
                        <PaginationControls />
                    </section>
                ) : (
                    <NotHasTasksIndicator />
                )}
            </section>
        </main>
    );
};
