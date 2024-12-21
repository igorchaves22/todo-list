import { createSlice } from "@reduxjs/toolkit";
import { ITodoList } from "~types";
import {
    TODO_LIST_INITIAL_STATE,
    TODO_LIST_LOCALSTORAGE_KEY,
    arrayLength,
    calculateTotalPages,
    getCurrentTasks,
    getTaskListOnLocalStorage
} from "~utils";

export const todoListSlice = createSlice({
    name: TODO_LIST_LOCALSTORAGE_KEY,
    initialState: (): ITodoList => {
        const taskList = getTaskListOnLocalStorage();

        const totalTaskCount = arrayLength(taskList);

        return {
            ...TODO_LIST_INITIAL_STATE,
            queryParams: {
                ...TODO_LIST_INITIAL_STATE.queryParams,
                pagination: {
                    ...TODO_LIST_INITIAL_STATE.queryParams.pagination,
                    totalPages: calculateTotalPages(totalTaskCount)
                }
            },
            info: {
                totalStateTask: totalTaskCount,
                totalStoredTask: totalTaskCount
            },
            tasks: getCurrentTasks(taskList, TODO_LIST_INITIAL_STATE.queryParams.pagination.currentPage)
        };
    },
    reducers: {}
});

export const todoListReducer = todoListSlice.reducer;
