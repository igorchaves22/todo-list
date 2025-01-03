import { configureStore } from "@reduxjs/toolkit";
import { todoListActions, todoListReducer } from "./slice/todoListSlice";

export const store = configureStore({
    reducer: {
        todoList: todoListReducer
    }
});

export const { addTask, applySearch, goToFirstPage, goToPrevPage, goToNextPage, goToLastPage, resetQueryParams } =
    todoListActions;

export type StoreRootStateType = ReturnType<typeof store.getState>;
