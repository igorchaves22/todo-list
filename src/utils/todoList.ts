import { arrayLength } from "./global";

export const TODO_LIST_LOCALSTORAGE_KEY = "todoList";
export const TASK_LIST_INITIAL_STATE = [];
export const TODO_LIST_INITIAL_STATE = {
    info: {
        totalTasks: arrayLength(TASK_LIST_INITIAL_STATE)
    },
    tasks: TASK_LIST_INITIAL_STATE
};

export const updateTodoListState = () => {
    return TODO_LIST_INITIAL_STATE;
};
