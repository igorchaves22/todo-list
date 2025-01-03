import * as yup from "yup";

export const searchTaskFormSchema = yup.object().shape({
    searchTerm: yup.string().required("Enter at least 1 character")
});

export const addTaskFormSchema = yup.object().shape({
    title: yup.string().required("Title is a required field"),
    description: yup.string().required("Description is a required field"),
    priority: yup.string().oneOf(["low", "medium", "high"]).required("Priority is a required field")
});

export type SearchTaskFormSchemaType = yup.InferType<typeof searchTaskFormSchema>;
export type AddTaskFormSchemaType = yup.InferType<typeof addTaskFormSchema>;
