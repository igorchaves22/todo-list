import { TaskListType } from "~types";
import { getLocalStorageItem, setLocalStorageItem } from "./localStorage";

export const TODO_LIST_LOCALSTORAGE_KEY = "todoList";

export const TASK_LIST_INITIAL_STATE: TaskListType = [];

export const getTaskListOnLocalStorage = () => {
    return getLocalStorageItem<TaskListType>(TODO_LIST_LOCALSTORAGE_KEY) || TASK_LIST_INITIAL_STATE;
};

export const initializeTaskListFromLocalStorage = () => {
    const item = getLocalStorageItem<TaskListType>(TODO_LIST_LOCALSTORAGE_KEY);

    if (!item) {
        setLocalStorageItem(TODO_LIST_LOCALSTORAGE_KEY, TASK_LIST_INITIAL_STATE);
    }

    return null;
};
