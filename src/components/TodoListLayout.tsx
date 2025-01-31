import { useTodoListLayout } from "~hooks";
import { NoTaskIndicator } from "./NoTaskIndicator";
import { TaskCount } from "./TaskCount";

export const TodoListLayout = () => {
    const { hasTasks } = useTodoListLayout();

    return (
        <main className="w-full h-min pt-4 px-4 pb-12 grid grid-rows-[min-content_1fr] grid-cols-[min(100%,90rem)] grow gap-y-12 justify-center justify-items-center">
            <p className="w-max h-min text-neutral-50 font-patrickHand text-base">ADD TASK FORM</p>
            <section className="w-full h-min min-h-full flex flex-col place-content-center place-items-center">
                {hasTasks ? (
                    <section className="w-full h-min flex flex-col grow gap-y-4 md:px-20">
                        <TaskCount />
                        <p className="w-full h-min grow text-neutral-50 font-patrickHand text-base">TASK LIST</p>
                    </section>
                ) : (
                    <NoTaskIndicator />
                )}
            </section>
        </main>
    );
};
