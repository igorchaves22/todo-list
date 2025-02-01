import * as yup from "yup";
import { TaskPriorityType } from "~types";
import { generateRandomNumber } from "./global";

export const createTask = (priority: TaskPriorityType, title: string) => {
    return {
        id: generateRandomNumber(),
        info: {
            done: false,
            priority
        },
        content: {
            title
        }
    };
};

export const addTaskFormSchema = yup.object().shape({
    priority: yup.string().oneOf(["low", "medium", "high"]).required("Priority is a required field"),
    title: yup.string().required("Title is a required field")
});

export type AddTaskFormSchemaType = yup.InferType<typeof addTaskFormSchema>;
