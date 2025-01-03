import { PageHeader, TodoListStateProvider } from "~components";
import { initializeTaskListFromLocalStorage } from "~utils";
import "~styles/main.css";

initializeTaskListFromLocalStorage();

export function App() {
    return (
        <>
            <PageHeader />
            <TodoListStateProvider>
                <h1>App</h1>
            </TodoListStateProvider>
        </>
    );
}
