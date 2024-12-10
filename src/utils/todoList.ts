import { TaskListType } from "~types";
import { ceilDivision, getItemsInRange } from "./global";
import { getLocalStorageItem, setLocalStorageItem } from "./localStorage";

export const TODO_LIST_LOCALSTORAGE_KEY = "todoList";
export const TASK_LIST_INITIAL_STATE: TaskListType = [];
export const TODO_LIST_INITIAL_PAGE = 1;
export const TODO_LIST_ITEMS_PER_PAGE = 12;

export const getTaskListOnLocalStorage = () => {
    return getLocalStorageItem<TaskListType>(TODO_LIST_LOCALSTORAGE_KEY) || TASK_LIST_INITIAL_STATE;
};

export const saveTaskListToLocalStorage = (todoList: TaskListType) => {
    return setLocalStorageItem(TODO_LIST_LOCALSTORAGE_KEY, todoList);
};

export const initializeTaskListFromLocalStorage = () => {
    const item = getLocalStorageItem<TaskListType>(TODO_LIST_LOCALSTORAGE_KEY);

    if (!item) {
        saveTaskListToLocalStorage(TASK_LIST_INITIAL_STATE);
    }

    return null;
};

export const calculateTotalPages = (itemsLength: number) => {
    return ceilDivision(itemsLength, TODO_LIST_ITEMS_PER_PAGE);
};

export const getTasksInRange = (taskList: TaskListType, currentPage: number) => {
    return getItemsInRange(taskList, currentPage, TODO_LIST_ITEMS_PER_PAGE);
};