import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DeepPartial, ITask, ITodoList } from "~types";
import {
    TASK_LIST_INITIAL_STATE,
    TODO_LIST_INITIAL_PAGE,
    TODO_LIST_INITIAL_STATE,
    TODO_LIST_LOCALSTORAGE_KEY,
    adjustCurrentPage,
    arrayLength,
    calculateTotalPages,
    getTaskListOnLocalStorage,
    getTasksInRange,
    removeArrayDuplicates,
    saveTaskListToLocalStorage,
    transformToLowerCase,
    validateUniqueId
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
            tasks: getTasksInRange(taskList, TODO_LIST_INITIAL_STATE.queryParams.pagination.currentPage)
        };
    },
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            let { payload } = action;
            let taskList = getTaskListOnLocalStorage();

            payload.id = validateUniqueId(taskList, payload.id);
            taskList = [...taskList, payload];

            saveTaskListToLocalStorage(taskList);

            state.info.totalStoredTask = arrayLength(taskList);

            const searchAndFilterStatus = {
                hasSearch: state.queryParams.search.length > 0,
                hasDoneFilter: arrayLength(state.queryParams.filters.done) > 0,
                hasPriorityFilter: arrayLength(state.queryParams.filters.priority) > 0,
                hasDatesFilter: arrayLength(state.queryParams.filters.dates) > 0,
                hasTimesFilter: arrayLength(state.queryParams.filters.times) > 0
            };

            if (Object.values(searchAndFilterStatus).some(Boolean)) {
                const searchTerm = transformToLowerCase(state.queryParams.search);

                taskList = taskList.filter((item) => {
                    const taskTitle = transformToLowerCase(item.content.title);
                    const [taskDate, taskTime] = item.info.created.split(" - ");

                    const matchesSearch = !searchAndFilterStatus.hasSearch || taskTitle.includes(searchTerm);
                    const matchesDoneFilter =
                        !searchAndFilterStatus.hasDoneFilter || state.queryParams.filters.done.includes(item.info.done);
                    const matchesPriorityFilter =
                        !searchAndFilterStatus.hasPriorityFilter ||
                        state.queryParams.filters.priority.includes(item.info.priority);
                    const matchesDatesFilter =
                        !searchAndFilterStatus.hasDatesFilter || state.queryParams.filters.dates.includes(taskDate);
                    const matchesTimesFilter =
                        !searchAndFilterStatus.hasTimesFilter || state.queryParams.filters.times.includes(taskTime);

                    return (
                        matchesSearch &&
                        matchesDoneFilter &&
                        matchesPriorityFilter &&
                        matchesDatesFilter &&
                        matchesTimesFilter
                    );
                });
            }

            state.info.totalStateTask = arrayLength(taskList);
            state.queryParams.pagination.totalPages = calculateTotalPages(state.info.totalStateTask);
            state.tasks = getTasksInRange(taskList, state.queryParams.pagination.currentPage);
        },
        editTask: (state, action: PayloadAction<DeepPartial<ITask> & { id: number }>) => {
            const { payload } = action;
            let taskList = getTaskListOnLocalStorage();

            taskList = taskList.map((item) => {
                const matchesTask = item.id === payload.id;

                if (matchesTask) {
                    return {
                        ...item,
                        ...payload,
                        info: { ...item.info, ...payload.info },
                        content: { ...item.content, ...payload.content }
                    };
                }

                return item;
            });

            saveTaskListToLocalStorage(taskList);

            const searchAndFilterStatus = {
                hasSearch: state.queryParams.search.length > 0,
                hasDoneFilter: arrayLength(state.queryParams.filters.done) > 0,
                hasPriorityFilter: arrayLength(state.queryParams.filters.priority) > 0,
                hasDatesFilter: arrayLength(state.queryParams.filters.dates) > 0,
                hasTimesFilter: arrayLength(state.queryParams.filters.times) > 0
            };

            if (Object.values(searchAndFilterStatus).some(Boolean)) {
                const searchTerm = transformToLowerCase(state.queryParams.search);

                taskList = taskList.filter((item) => {
                    const taskTitle = transformToLowerCase(item.content.title);
                    const [taskDate, taskTime] = item.info.created.split(" - ");

                    const matchesSearch = !searchAndFilterStatus.hasSearch || taskTitle.includes(searchTerm);
                    const matchesDoneFilter =
                        !searchAndFilterStatus.hasDoneFilter || state.queryParams.filters.done.includes(item.info.done);
                    const matchesPriorityFilter =
                        !searchAndFilterStatus.hasPriorityFilter ||
                        state.queryParams.filters.priority.includes(item.info.priority);
                    const matchesDatesFilter =
                        !searchAndFilterStatus.hasDatesFilter || state.queryParams.filters.dates.includes(taskDate);
                    const matchesTimesFilter =
                        !searchAndFilterStatus.hasTimesFilter || state.queryParams.filters.times.includes(taskTime);

                    return (
                        matchesSearch &&
                        matchesDoneFilter &&
                        matchesPriorityFilter &&
                        matchesDatesFilter &&
                        matchesTimesFilter
                    );
                });
            }

            state.info.totalStateTask = arrayLength(taskList);
            state.queryParams.pagination.totalPages = calculateTotalPages(state.info.totalStateTask);
            state.queryParams.pagination.currentPage = adjustCurrentPage(
                state.queryParams.pagination.currentPage,
                state.queryParams.pagination.totalPages
            );
            state.tasks = getTasksInRange(taskList, state.queryParams.pagination.currentPage);
        },
        toggleTaskDone: (state, action: PayloadAction<number>) => {
            const { payload } = action;
            let taskList = getTaskListOnLocalStorage();

            taskList = taskList.map((item) => {
                const matchesTask = item.id === payload;

                if (matchesTask) {
                    return {
                        ...item,
                        info: { ...item.info, done: !item.info.done }
                    };
                }

                return item;
            });

            saveTaskListToLocalStorage(taskList);

            const searchAndFilterStatus = {
                hasSearch: state.queryParams.search.length > 0,
                hasDoneFilter: arrayLength(state.queryParams.filters.done) > 0,
                hasPriorityFilter: arrayLength(state.queryParams.filters.priority) > 0,
                hasDatesFilter: arrayLength(state.queryParams.filters.dates) > 0,
                hasTimesFilter: arrayLength(state.queryParams.filters.times) > 0
            };

            if (Object.values(searchAndFilterStatus).some(Boolean)) {
                const searchTerm = transformToLowerCase(state.queryParams.search);

                taskList = taskList.filter((item) => {
                    const taskTitle = transformToLowerCase(item.content.title);
                    const [taskDate, taskTime] = item.info.created.split(" - ");

                    const matchesSearch = !searchAndFilterStatus.hasSearch || taskTitle.includes(searchTerm);
                    const matchesDoneFilter =
                        !searchAndFilterStatus.hasDoneFilter || state.queryParams.filters.done.includes(item.info.done);
                    const matchesPriorityFilter =
                        !searchAndFilterStatus.hasPriorityFilter ||
                        state.queryParams.filters.priority.includes(item.info.priority);
                    const matchesDatesFilter =
                        !searchAndFilterStatus.hasDatesFilter || state.queryParams.filters.dates.includes(taskDate);
                    const matchesTimesFilter =
                        !searchAndFilterStatus.hasTimesFilter || state.queryParams.filters.times.includes(taskTime);

                    return (
                        matchesSearch &&
                        matchesDoneFilter &&
                        matchesPriorityFilter &&
                        matchesDatesFilter &&
                        matchesTimesFilter
                    );
                });
            }

            state.info.totalStateTask = arrayLength(taskList);
            state.queryParams.pagination.totalPages = calculateTotalPages(state.info.totalStateTask);
            state.queryParams.pagination.currentPage = adjustCurrentPage(
                state.queryParams.pagination.currentPage,
                state.queryParams.pagination.totalPages
            );
            state.tasks = getTasksInRange(taskList, state.queryParams.pagination.currentPage);
        },
        removeTask: (state, action: PayloadAction<number>) => {
            const { payload } = action;
            let taskList = getTaskListOnLocalStorage();

            taskList = taskList.filter((item) => item.id !== payload);

            saveTaskListToLocalStorage(taskList);

            state.info.totalStoredTask = arrayLength(taskList);

            const searchAndFilterStatus = {
                hasSearch: state.queryParams.search.length > 0,
                hasDoneFilter: arrayLength(state.queryParams.filters.done) > 0,
                hasPriorityFilter: arrayLength(state.queryParams.filters.priority) > 0,
                hasDatesFilter: arrayLength(state.queryParams.filters.dates) > 0,
                hasTimesFilter: arrayLength(state.queryParams.filters.times) > 0
            };

            if (Object.values(searchAndFilterStatus).some(Boolean)) {
                const searchTerm = transformToLowerCase(state.queryParams.search);

                taskList = taskList.filter((item) => {
                    const taskTitle = transformToLowerCase(item.content.title);
                    const [taskDate, taskTime] = item.info.created.split(" - ");

                    const matchesSearch = !searchAndFilterStatus.hasSearch || taskTitle.includes(searchTerm);
                    const matchesDoneFilter =
                        !searchAndFilterStatus.hasDoneFilter || state.queryParams.filters.done.includes(item.info.done);
                    const matchesPriorityFilter =
                        !searchAndFilterStatus.hasPriorityFilter ||
                        state.queryParams.filters.priority.includes(item.info.priority);
                    const matchesDatesFilter =
                        !searchAndFilterStatus.hasDatesFilter || state.queryParams.filters.dates.includes(taskDate);
                    const matchesTimesFilter =
                        !searchAndFilterStatus.hasTimesFilter || state.queryParams.filters.times.includes(taskTime);

                    return (
                        matchesSearch &&
                        matchesDoneFilter &&
                        matchesPriorityFilter &&
                        matchesDatesFilter &&
                        matchesTimesFilter
                    );
                });
            }

            state.info.totalStateTask = arrayLength(taskList);
            state.queryParams.pagination.totalPages = calculateTotalPages(state.info.totalStateTask);
            state.queryParams.pagination.currentPage = adjustCurrentPage(
                state.queryParams.pagination.currentPage,
                state.queryParams.pagination.totalPages
            );
            state.tasks = getTasksInRange(taskList, state.queryParams.pagination.currentPage);
        },
        removeAllTasks: (state) => {
            saveTaskListToLocalStorage(TASK_LIST_INITIAL_STATE);

            state.queryParams = TODO_LIST_INITIAL_STATE.queryParams;
            state.info = TODO_LIST_INITIAL_STATE.info;
            state.tasks = TODO_LIST_INITIAL_STATE.tasks;
        },
        applySearchOrFilter: (
            state,
            action: PayloadAction<DeepPartial<Omit<ITodoList["queryParams"], "pagination">>>
        ) => {
            const { payload } = action;
            let taskList = getTaskListOnLocalStorage();

            if (payload.search) {
                state.queryParams.search = payload.search;
            }

            if (payload.filters) {
                state.queryParams.filters = {
                    done: payload.filters?.done
                        ? removeArrayDuplicates([...state.queryParams.filters.done, ...payload.filters.done])
                        : state.queryParams.filters.done,
                    priority: payload.filters?.priority
                        ? removeArrayDuplicates([...state.queryParams.filters.priority, ...payload.filters.priority])
                        : state.queryParams.filters.priority,
                    dates: payload.filters?.dates
                        ? removeArrayDuplicates([...state.queryParams.filters.dates, ...payload.filters.dates])
                        : state.queryParams.filters.dates,
                    times: payload.filters?.times
                        ? removeArrayDuplicates([...state.queryParams.filters.times, ...payload.filters.times])
                        : state.queryParams.filters.times
                };
            }

            const searchAndFilterStatus = {
                hasSearch: state.queryParams.search.length > 0,
                hasDoneFilter: arrayLength(state.queryParams.filters.done) > 0,
                hasPriorityFilter: arrayLength(state.queryParams.filters.priority) > 0,
                hasDatesFilter: arrayLength(state.queryParams.filters.dates) > 0,
                hasTimesFilter: arrayLength(state.queryParams.filters.times) > 0
            };

            if (Object.values(searchAndFilterStatus).some(Boolean)) {
                const searchTerm = transformToLowerCase(state.queryParams.search);

                taskList = taskList.filter((item) => {
                    const taskTitle = transformToLowerCase(item.content.title);
                    const [taskDate, taskTime] = item.info.created.split(" - ");

                    const matchesSearch = !searchAndFilterStatus.hasSearch || taskTitle.includes(searchTerm);
                    const matchesDoneFilter =
                        !searchAndFilterStatus.hasDoneFilter || state.queryParams.filters.done.includes(item.info.done);
                    const matchesPriorityFilter =
                        !searchAndFilterStatus.hasPriorityFilter ||
                        state.queryParams.filters.priority.includes(item.info.priority);
                    const matchesDatesFilter =
                        !searchAndFilterStatus.hasDatesFilter || state.queryParams.filters.dates.includes(taskDate);
                    const matchesTimesFilter =
                        !searchAndFilterStatus.hasTimesFilter || state.queryParams.filters.times.includes(taskTime);

                    return (
                        matchesSearch &&
                        matchesDoneFilter &&
                        matchesPriorityFilter &&
                        matchesDatesFilter &&
                        matchesTimesFilter
                    );
                });
            }

            state.info.totalStateTask = arrayLength(taskList);
            state.queryParams.pagination.totalPages = calculateTotalPages(state.info.totalStateTask);
            state.queryParams.pagination.currentPage = TODO_LIST_INITIAL_PAGE;
            state.tasks = getTasksInRange(taskList, state.queryParams.pagination.currentPage);
        },
        setPage: (state, action: PayloadAction<number>) => {
            const { payload } = action;
            let taskList = getTaskListOnLocalStorage();

            state.queryParams.pagination.currentPage = payload;

            const searchAndFilterStatus = {
                hasSearch: state.queryParams.search.length > 0,
                hasDoneFilter: arrayLength(state.queryParams.filters.done) > 0,
                hasPriorityFilter: arrayLength(state.queryParams.filters.priority) > 0,
                hasDatesFilter: arrayLength(state.queryParams.filters.dates) > 0,
                hasTimesFilter: arrayLength(state.queryParams.filters.times) > 0
            };

            if (Object.values(searchAndFilterStatus).some(Boolean)) {
                const searchTerm = transformToLowerCase(state.queryParams.search);

                taskList = taskList.filter((item) => {
                    const taskTitle = transformToLowerCase(item.content.title);
                    const [taskDate, taskTime] = item.info.created.split(" - ");

                    const matchesSearch = !searchAndFilterStatus.hasSearch || taskTitle.includes(searchTerm);
                    const matchesDoneFilter =
                        !searchAndFilterStatus.hasDoneFilter || state.queryParams.filters.done.includes(item.info.done);
                    const matchesPriorityFilter =
                        !searchAndFilterStatus.hasPriorityFilter ||
                        state.queryParams.filters.priority.includes(item.info.priority);
                    const matchesDatesFilter =
                        !searchAndFilterStatus.hasDatesFilter || state.queryParams.filters.dates.includes(taskDate);
                    const matchesTimesFilter =
                        !searchAndFilterStatus.hasTimesFilter || state.queryParams.filters.times.includes(taskTime);

                    return (
                        matchesSearch &&
                        matchesDoneFilter &&
                        matchesPriorityFilter &&
                        matchesDatesFilter &&
                        matchesTimesFilter
                    );
                });
            }

            state.tasks = getTasksInRange(taskList, state.queryParams.pagination.currentPage);
        },
        resetQueryParams: (state) => {
            const taskList = getTaskListOnLocalStorage();

            const totalTaskCount = arrayLength(taskList);

            state.queryParams = {
                ...TODO_LIST_INITIAL_STATE.queryParams,
                pagination: {
                    ...TODO_LIST_INITIAL_STATE.queryParams.pagination,
                    totalPages: calculateTotalPages(totalTaskCount)
                }
            };
            state.info.totalStateTask = totalTaskCount;
            state.tasks = getTasksInRange(taskList, state.queryParams.pagination.currentPage);
        }
    }
});

export const todoListReducer = todoListSlice.reducer;
export const todoListActions = todoListSlice.actions;
