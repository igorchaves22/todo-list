import * as yup from "yup";

export const searchTaskFormSchema = yup.object().shape({
    searchTerm: yup.string().required("Search term is a required field")
});

export type SearchTaskFormSchemaType = yup.InferType<typeof searchTaskFormSchema>;
