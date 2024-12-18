import { ITodoList, TaskListType } from "~types";
import { ceilDivision, generateRandomNumber, getItemsInRange } from "./global";
import { getLocalStorageItem, setLocalStorageItem } from "./localStorage";

export const TODO_LIST_LOCALSTORAGE_KEY = "todoList";
export const TASK_LIST_INITIAL_STATE: TaskListType = [];
export const TODO_LIST_INITIAL_PAGE = 1;
export const TODO_LIST_ITEMS_PER_PAGE = 12;
export const TODO_LIST_INITIAL_STATE: ITodoList = {
    queryParams: {
        search: "",
        filters: {
            done: [],
            priority: [],
            dates: [],
            times: []
        },
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

export const itemAnimationDelays = Array.from(
    { length: TODO_LIST_ITEMS_PER_PAGE },
    (_, index) => index / TODO_LIST_ITEMS_PER_PAGE
);

export const validateUniqueId = (taskList: TaskListType, id: number): number => {
    const idSet = new Set(taskList.map((task) => task.id));
    const isDuplicateId = idSet.has(id);

    if (isDuplicateId) {
        return validateUniqueId(taskList, generateRandomNumber());
    }

    return id;
};

export const adjustCurrentPage = (currentPage: number, totalPages: number) => {
    return Math.min(Math.max(currentPage, TODO_LIST_INITIAL_PAGE), totalPages);
};
