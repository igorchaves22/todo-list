import * as yup from "yup";

export const searchTaskFormSchema = yup.object().shape({
    searchTerm: yup.string().required("Search term is a required field")
});

export const addTaskFormSchema = yup.object().shape({
    title: yup.string().required("Title is a required field").min(3, "Title must be at least 3 character"),
    description: yup
        .string()
        .required("Description is a required field")
        .min(3, "Description must be at least 3 character"),
    priority: yup.string().oneOf(["low", "medium", "high"]).required("Priority is a required field")
});

export type SearchTaskFormSchemaType = yup.InferType<typeof searchTaskFormSchema>;
export type AddTaskFormSchemaType = yup.InferType<typeof addTaskFormSchema>;
