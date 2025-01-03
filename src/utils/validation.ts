import * as yup from "yup";

export const searchTaskFormSchema = yup.object().shape({
    searchTerm: yup.string().required("Enter at least 1 character")
});

export type SearchTaskFormSchemaType = yup.InferType<typeof searchTaskFormSchema>;
