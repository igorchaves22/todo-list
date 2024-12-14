import { createSlice } from "@reduxjs/toolkit";
import { ITodoList } from "~types";
import {
    TODO_LIST_INITIAL_STATE,
    TODO_LIST_LOCALSTORAGE_KEY,
    arrayLength,
    calculateTotalPages,
    getTaskListOnLocalStorage,
    getTasksInRange
} from "~utils";

export const todoListSlice = createSlice({
    name: TODO_LIST_LOCALSTORAGE_KEY,
    initialState: (): ITodoList => {
        const taskList = getTaskListOnLocalStorage();

        let defineState = TODO_LIST_INITIAL_STATE;
        const totalTaskCount = arrayLength(taskList);
        const getTotalPages = calculateTotalPages(totalTaskCount);
        const getCurrentTasks = getTasksInRange(taskList, defineState.queryParams.pagination.currentPage);

        defineState = {
            ...defineState,
            queryParams: {
                ...defineState.queryParams,
                pagination: {
                    ...defineState.queryParams.pagination,
                    totalPages: getTotalPages
                }
            },
            info: {
                totalStateTask: totalTaskCount,
                totalStoredTask: totalTaskCount
            },
            tasks: getCurrentTasks
        };

        return defineState;
    },
    reducers: {}
});

export const todoListReducer = todoListSlice.reducer;
