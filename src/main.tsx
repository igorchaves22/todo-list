import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initializeTaskListFromLocalStorage } from "~utils";
import { App } from "./App";
import "~styles/main.css";

initializeTaskListFromLocalStorage();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
