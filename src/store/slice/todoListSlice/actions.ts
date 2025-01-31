import { ITodoList } from "~types";
import { getTaskListOnLocalStorage, updateTodoListState, validateUniqueId } from "~utils";
import { TaskActionType } from "./types";

export const actions = {
    addTask: (state: ITodoList, action: TaskActionType) => {
        let { payload } = action;
        let taskList = getTaskListOnLocalStorage();

        payload.id = validateUniqueId(taskList, payload.id);
        taskList = [...taskList, payload];

        const { info, tasks } = updateTodoListState(taskList);

        state.info = info;
        state.tasks = tasks;
    }
};
