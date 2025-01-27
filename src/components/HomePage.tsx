import { TodoListStateProvider } from "./TodoListStateProvider";

export const HomePage = () => {
    return (
        <TodoListStateProvider>
            <h1>App</h1>
        </TodoListStateProvider>
    );
};
