import { createSlice } from "@reduxjs/toolkit";
import { TODO_LIST_LOCALSTORAGE_KEY, updateTodoListState } from "~utils";
import { actions } from "./actions";

const todoListSlice = createSlice({
    name: TODO_LIST_LOCALSTORAGE_KEY,
    initialState: updateTodoListState(),
    reducers: actions
});

export const todoListReducer = todoListSlice.reducer;
export const todoListActions = todoListSlice.actions;
