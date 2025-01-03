import { PageContent, PageHeader, TodoListStateProvider } from "~components";
import { initializeTaskListFromLocalStorage } from "~utils";
import "~styles/main.css";

initializeTaskListFromLocalStorage();

export function App() {
    return (
        <>
            <PageHeader />
            <TodoListStateProvider>
                <PageContent />
            </TodoListStateProvider>
        </>
    );
}
