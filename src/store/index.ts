import { configureStore } from "@reduxjs/toolkit";
import { todoListReducer } from "./slice/todoListSlice";

export const store = configureStore({
    reducer: {
        todoList: todoListReducer
    }
});

export type StoreRootStateType = ReturnType<typeof store.getState>;
