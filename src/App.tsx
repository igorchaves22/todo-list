import { TodoListProvider } from "~components/shared";
import { Header } from "~components/ui";

export function App() {
    return (
        <TodoListProvider>
            <Header />
        </TodoListProvider>
    );
}
