import { HomePage } from "~components";
import { initializeTaskListFromLocalStorage } from "~utils";
import "~styles/tailwindcss.css";

initializeTaskListFromLocalStorage();

export function App() {
    return <HomePage />;
}
