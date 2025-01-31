import { TodoListStateProvider } from "./TodoListStateProvider";

export const HomePage = () => {
    return (
        <section className="w-full h-auto min-h-screen flex flex-col bg-neutral-950">
            <TodoListStateProvider>
                <h1>App</h1>
            </TodoListStateProvider>
        </section>
    );
};
