import { TaskListType } from "~types";
import { arrayLength } from "./global";
import { getLocalStorageItem, setLocalStorageItem } from "./localStorage";

export const TODO_LIST_LOCALSTORAGE_KEY = "todoList";
export const TASK_LIST_INITIAL_STATE = [];
export const TODO_LIST_INITIAL_STATE = {
    info: {
        totalTasks: arrayLength(TASK_LIST_INITIAL_STATE)
    },
    tasks: TASK_LIST_INITIAL_STATE
};

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

export const updateTodoListState = () => {
    const taskList = getTaskListOnLocalStorage();
    const totalTaskCount = arrayLength(taskList);

    return {
        info: {
            totalTasks: totalTaskCount
        },
        tasks: taskList
    };
};
