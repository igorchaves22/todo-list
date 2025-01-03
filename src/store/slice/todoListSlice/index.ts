import { createSlice } from "@reduxjs/toolkit";
import { ITodoList } from "~types";
import { TODO_LIST_INITIAL_PAGE, TODO_LIST_LOCALSTORAGE_KEY, updateTodoListState } from "~utils";

const todoListSlice = createSlice({
    name: TODO_LIST_LOCALSTORAGE_KEY,
    initialState: updateTodoListState(),
    reducers: {
        goToFirstPage: (state: ITodoList) => {
            state.queryParams.pagination.currentPage = TODO_LIST_INITIAL_PAGE;

            const {
                queryParams: {
                    pagination: { currentPage }
                },
                tasks
            } = updateTodoListState(undefined, state);

            state.queryParams.pagination.currentPage = currentPage;
            state.tasks = tasks;
        },
        goToPrevPage: (state: ITodoList) => {
            state.queryParams.pagination.currentPage = state.queryParams.pagination.currentPage - 1;

            const {
                queryParams: {
                    pagination: { currentPage }
                },
                tasks
            } = updateTodoListState(undefined, state);

            state.queryParams.pagination.currentPage = currentPage;
            state.tasks = tasks;
        },
        goToNextPage: (state: ITodoList) => {
            state.queryParams.pagination.currentPage = state.queryParams.pagination.currentPage + 1;

            const {
                queryParams: {
                    pagination: { currentPage }
                },
                tasks
            } = updateTodoListState(undefined, state);

            state.queryParams.pagination.currentPage = currentPage;
            state.tasks = tasks;
        },
        goToLastPage: (state: ITodoList) => {
            state.queryParams.pagination.currentPage = state.queryParams.pagination.totalPages;

            const {
                queryParams: {
                    pagination: { currentPage }
                },
                tasks
            } = updateTodoListState(undefined, state);

            state.queryParams.pagination.currentPage = currentPage;
            state.tasks = tasks;
        }
    }
});

export const todoListReducer = todoListSlice.reducer;
export const todoListActions = todoListSlice.actions;
