import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { applySearchOrFilter } from "~store";
import { SearchTaskFormSchemaType, searchTaskFormSchema } from "~utils";
import { useTodoListState } from "./useTodoListState";

export const useSearchTaskForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm<SearchTaskFormSchemaType>({
        resolver: yupResolver(searchTaskFormSchema)
    });
    const { dispatch } = useTodoListState();

    const submitData = handleSubmit(({ searchTerm }) => {
        dispatch(applySearchOrFilter({ search: searchTerm }));
        reset();
    });

    useEffect(() => {
        if (errors.searchTerm) {
            const timeoutId = setTimeout(() => {
                reset();
            }, 10000);

            return () => clearTimeout(timeoutId);
        }
    }, [errors.searchTerm, reset]);

    return {
        submitData,
        register,
        errors
    };
};
