import { createSlice } from "@reduxjs/toolkit";
import { ITodoListType } from "~types";
import { TODO_LIST_LOCALSTORAGE_KEY, getTaskListOnLocalStorage } from "~utils";

export const todoListSlice = createSlice({
    name: TODO_LIST_LOCALSTORAGE_KEY,
    initialState: (): ITodoListType => {
        const taskList = getTaskListOnLocalStorage();

        return {
            tasks: taskList
        };
    },
    reducers: {}
});

export const todoListReducer = todoListSlice.reducer;
