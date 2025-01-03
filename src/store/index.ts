import { configureStore } from "@reduxjs/toolkit";
import { todoListActions, todoListReducer } from "./slice/todoListSlice";

export const store = configureStore({
    reducer: {
        todoList: todoListReducer
    }
});

export const { applySearch, goToFirstPage, goToPrevPage, goToNextPage, goToLastPage } = todoListActions;

export type StoreRootStateType = ReturnType<typeof store.getState>;
