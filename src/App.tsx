import { TodoListProvider } from "~components/shared";
import { Header, Main } from "~components/ui";

export function App() {
    return (
        <>
            <Header />
            <TodoListProvider>
                <Main />
            </TodoListProvider>
        </>
    );
}
