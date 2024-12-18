import { configureStore } from "@reduxjs/toolkit";
import { todoListActions, todoListReducer } from "./slice/toDoListSlice";

export const store = configureStore({
    reducer: {
        todoList: todoListReducer
    }
});

export type StoreRootStateType = ReturnType<typeof store.getState>;
export const {
    addTask,
    editTask,
    toggleTaskDone,
    removeTask,
    removeAllTasks,
    applySearchOrFilter,
    setPage,
    resetQueryParams
} = todoListActions;
