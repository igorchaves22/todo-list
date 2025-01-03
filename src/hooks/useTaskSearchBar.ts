import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { SearchTaskFormSchemaType, searchTaskFormSchema } from "~utils";
import { useTodoListState } from "./useTodoListState";

const RESET_TIMEOUT = 5000;

export const useTaskSearchBar = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm<SearchTaskFormSchemaType>({
        resolver: yupResolver(searchTaskFormSchema)
    });
    const {
        dispatch: { dispatchApplySearch }
    } = useTodoListState();

    const hasError = !!errors.searchTerm;
    const errorMessage = errors.searchTerm?.message;
    const submitData = handleSubmit(({ searchTerm }) => {
        dispatchApplySearch(searchTerm);
        reset();
    });

    useEffect(() => {
        if (hasError) {
            const timeout = setTimeout(() => {
                reset();
            }, RESET_TIMEOUT);

            return () => clearTimeout(timeout);
        }
    }, [hasError, reset]);

    return {
        submitData,
        register,
        hasError,
        errorMessage
    };
};
