import { useTodoListLayout } from "~hooks";
import { AddTaskForm } from "./AddTaskForm";
import { NoTaskIndicator } from "./NoTaskIndicator";
import { TaskCount } from "./TaskCount";
import { TaskList } from "./TaskList";

export const TodoListLayout = () => {
    const { hasTasks } = useTodoListLayout();

    return (
        <main className="w-full h-min pt-4 px-4 pb-12 grid grid-rows-[min-content_1fr] grid-cols-[min(100%,90rem)] grow gap-y-12 justify-center justify-items-center">
            <AddTaskForm />
            <section className="w-full h-min min-h-full flex flex-col place-content-center place-items-center">
                {hasTasks ? (
                    <section className="w-full h-min flex flex-col grow gap-y-4 md:px-14">
                        <TaskCount />
                        <TaskList />
                    </section>
                ) : (
                    <NoTaskIndicator />
                )}
            </section>
        </main>
    );
};
