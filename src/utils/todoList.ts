import { TaskListType } from "~types";
import { arrayLength, generateRandomNumber } from "./global";
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

export const validateUniqueId = (taskList: TaskListType, id: number): number => {
    const isDuplicateId = taskList.some((item) => item.id === id);

    if (isDuplicateId) {
        return validateUniqueId(taskList, generateRandomNumber());
    }

    return id;
};

export const initializeTaskListFromLocalStorage = () => {
    const item = getLocalStorageItem<TaskListType>(TODO_LIST_LOCALSTORAGE_KEY);

    if (!item) {
        saveTaskListToLocalStorage(TASK_LIST_INITIAL_STATE);
    }

    return null;
};

export const updateTodoListState = (newStoredTaskList?: TaskListType) => {
    if (newStoredTaskList) {
        saveTaskListToLocalStorage(newStoredTaskList);
    }

    const taskList = getTaskListOnLocalStorage();
    const totalTaskCount = arrayLength(taskList);

    return {
        info: {
            totalTasks: totalTaskCount
        },
        tasks: taskList
    };
};
