import { createSlice } from "@reduxjs/toolkit";
import { ITodoListType } from "~types";
import {
    TODO_LIST_INITIAL_PAGE,
    TODO_LIST_LOCALSTORAGE_KEY,
    arrayLength,
    calculateTotalPages,
    getTaskListOnLocalStorage,
    getTasksInRange
} from "~utils";

export const todoListSlice = createSlice({
    name: TODO_LIST_LOCALSTORAGE_KEY,
    initialState: (): ITodoListType => {
        const taskList = getTaskListOnLocalStorage();

        const totalTaskCount = arrayLength(taskList);
        const defineQueryParams = {
            search: "",
            filters: {
                done: [],
                priority: [],
                dates: [],
                times: []
            },
            pagination: {
                currentPage: TODO_LIST_INITIAL_PAGE,
                totalPages: calculateTotalPages(totalTaskCount)
            }
        };
        const defineInfo = {
            totalStateTasks: totalTaskCount,
            totalStoredTasks: totalTaskCount
        };
        const getCurrentTasks = getTasksInRange(taskList, defineQueryParams.pagination.currentPage);

        return {
            queryParams: defineQueryParams,
            info: defineInfo,
            tasks: getCurrentTasks
        };
    },
    reducers: {}
});

export const todoListReducer = todoListSlice.reducer;
