import { createSlice } from "@reduxjs/toolkit";
import { ITodoList } from "~types";
import {
    TODO_LIST_INITIAL_PAGE,
    TODO_LIST_LOCALSTORAGE_KEY,
    getTaskListOnLocalStorage,
    updateTodoListState,
    validateUniqueId
} from "~utils";
import { StringActionType, TaskActionType } from "./types";

const todoListSlice = createSlice({
    name: TODO_LIST_LOCALSTORAGE_KEY,
    initialState: updateTodoListState(),
    reducers: {
        addTask: (state: ITodoList, action: TaskActionType) => {
            let { payload } = action;
            let taskList = getTaskListOnLocalStorage();

            payload.id = validateUniqueId(taskList, payload.id);
            taskList = [...taskList, payload];

            const {
                queryParams: { pagination },
                info,
                tasks
            } = updateTodoListState(taskList, state);

            state.queryParams.pagination = pagination;
            state.info = info;
            state.tasks = tasks;
        },
        applySearch: (state: ITodoList, action: StringActionType) => {
            const { payload } = action;

            state.queryParams.search = payload;
            state.queryParams.pagination.currentPage = TODO_LIST_INITIAL_PAGE;

            const {
                info: { totalStateTask },
                tasks
            } = updateTodoListState(undefined, state);

            state.info.totalStateTask = totalStateTask;
            state.tasks = tasks;
        },
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
        },
        resetQueryParams: (state: ITodoList) => {
            const { queryParams, info, tasks } = updateTodoListState();

            state.queryParams = queryParams;
            state.info = info;
            state.tasks = tasks;
        }
    }
});

export const todoListReducer = todoListSlice.reducer;
export const todoListActions = todoListSlice.actions;
