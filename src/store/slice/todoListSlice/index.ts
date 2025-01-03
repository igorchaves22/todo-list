import { createSlice } from "@reduxjs/toolkit";
import { TODO_LIST_LOCALSTORAGE_KEY, updateTodoListState } from "~utils";

const todoListSlice = createSlice({
    name: TODO_LIST_LOCALSTORAGE_KEY,
    initialState: updateTodoListState(),
    reducers: {}
});

export const todoListReducer = todoListSlice.reducer;
