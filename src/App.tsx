import { TodoListStateProvider } from "~components";
import { initializeTaskListFromLocalStorage } from "~utils";
import "~styles/main.css";

initializeTaskListFromLocalStorage();

export function App() {
    return (
        <TodoListStateProvider>
            <h1>App</h1>
        </TodoListStateProvider>
    );
}
