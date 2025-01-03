import { ITodoList, TaskListType } from "~types";
import { arrayLength, ceilDivision, getItemsInRange, transformToLowerCase } from "./global";
import { getLocalStorageItem, setLocalStorageItem } from "./localStorage";

export const TODO_LIST_LOCALSTORAGE_KEY = "todoList";
export const TASK_LIST_INITIAL_STATE: TaskListType = [];
export const TODO_LIST_INITIAL_PAGE = 1;
export const TODO_LIST_ITEMS_PER_PAGE = 12;
export const TODO_LIST_INITIAL_STATE: ITodoList = {
    queryParams: {
        search: "",
        pagination: {
            currentPage: TODO_LIST_INITIAL_PAGE,
            totalPages: TODO_LIST_INITIAL_PAGE
        }
    },
    info: {
        totalStateTask: 0,
        totalStoredTask: 0
    },
    tasks: TASK_LIST_INITIAL_STATE
};
export const itemAnimationDelays = Array.from(
    { length: TODO_LIST_ITEMS_PER_PAGE },
    (_, index) => index / TODO_LIST_ITEMS_PER_PAGE
);

export const getTaskListOnLocalStorage = () => {
    return getLocalStorageItem<TaskListType>(TODO_LIST_LOCALSTORAGE_KEY) || TASK_LIST_INITIAL_STATE;
};

export const saveTaskListToLocalStorage = (todoList: TaskListType) => {
    return setLocalStorageItem(TODO_LIST_LOCALSTORAGE_KEY, todoList);
};

export const filteredTaskListWithQueryParams = (
    taskList: TaskListType,
    query: Omit<ITodoList["queryParams"], "pagination">
) => {
    const queryParamsStatus = {
        hasSearch: query.search.length > 0
    };
    const hasAnyQueryParamsActive = queryParamsStatus.hasSearch;

    if (hasAnyQueryParamsActive) {
        const searchTerm = transformToLowerCase(query.search);

        taskList = taskList.filter((item) => {
            const taskTitle = transformToLowerCase(item.content.title);

            const matchesSearch = !queryParamsStatus.hasSearch || taskTitle.includes(searchTerm);

            return matchesSearch;
        });
    }

    return taskList;
};

export const updatePagination = (currentPage: number, itemsLength: number) => {
    const getTotalPages = ceilDivision(itemsLength, TODO_LIST_ITEMS_PER_PAGE);
    const getCurrentPage = Math.min(Math.max(currentPage, TODO_LIST_INITIAL_PAGE), getTotalPages);

    return {
        currentPage: getCurrentPage,
        totalPages: getTotalPages
    };
};

export const getCurrentTasks = (taskList: TaskListType, page: number) => {
    return getItemsInRange(taskList, page, TODO_LIST_ITEMS_PER_PAGE);
};

export const initializeTaskListFromLocalStorage = () => {
    const item = getLocalStorageItem<TaskListType>(TODO_LIST_LOCALSTORAGE_KEY);

    if (!item) {
        saveTaskListToLocalStorage(TASK_LIST_INITIAL_STATE);
    }

    return null;
};

export const updateTodoListState = (newStoredTaskList?: TaskListType, currentState?: ITodoList) => {
    if (newStoredTaskList) {
        saveTaskListToLocalStorage(newStoredTaskList);
    }

    let taskList = getTaskListOnLocalStorage();
    let queryParams = currentState ? { ...currentState.queryParams } : { ...TODO_LIST_INITIAL_STATE.queryParams };
    let info = currentState ? { ...currentState.info } : { ...TODO_LIST_INITIAL_STATE.info };
    let tasks = TODO_LIST_INITIAL_STATE.tasks;

    info.totalStoredTask = arrayLength(taskList);
    taskList = filteredTaskListWithQueryParams(taskList, queryParams);
    info.totalStateTask = arrayLength(taskList);
    queryParams.pagination = updatePagination(queryParams.pagination.currentPage, info.totalStateTask);
    tasks = getCurrentTasks(taskList, queryParams.pagination.currentPage);

    return {
        queryParams,
        info,
        tasks
    };
};
