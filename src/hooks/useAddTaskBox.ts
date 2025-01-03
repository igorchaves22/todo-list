import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AddTaskFormSchemaType, addTaskFormSchema, generateRandomNumber, getCurrentDateTime } from "~utils";
import { useTodoListState } from "./useTodoListState";
import { useToggleState } from "./useToggleState";

const RESET_TIMEOUT = 5000;

export const useAddTaskBox = () => {
    const { state: modalVisibility, updateState: updateModalVisibility } = useToggleState(false, true);
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        getValues
    } = useForm<AddTaskFormSchemaType>({
        resolver: yupResolver(addTaskFormSchema),
        defaultValues: {
            priority: "low"
        }
    });
    const {
        dispatch: { dispatchAddTask }
    } = useTodoListState();

    const hasErrors = {
        title: !!errors.title,
        description: !!errors.description
    };
    const hasAnyErrorActive = hasErrors.title || hasErrors.description;
    const errorsMessage = {
        title: errors.title?.message || "",
        description: errors.description?.message || ""
    };
    const handleClickToggleModalVisibility = useCallback(() => {
        updateModalVisibility();
        reset();
    }, [updateModalVisibility, reset]);
    const submitData = handleSubmit(({ priority, title, description }) => {
        const newTask = {
            id: generateRandomNumber(),
            info: {
                done: false,
                created: getCurrentDateTime(),
                priority
            },
            content: {
                title,
                description
            }
        };

        dispatchAddTask(newTask);
        reset();
        updateModalVisibility();
    });

    useEffect(() => {
        if (hasAnyErrorActive) {
            if (hasErrors.title) {
                const timeout = setTimeout(() => {
                    reset({ title: undefined });
                }, RESET_TIMEOUT);

                return () => clearTimeout(timeout);
            }

            if (hasErrors.description) {
                const timeout = setTimeout(() => {
                    reset({ description: undefined });
                }, RESET_TIMEOUT);

                return () => clearTimeout(timeout);
            }
        }
    }, [hasAnyErrorActive, hasErrors.title, hasErrors.description, reset]);

    return {
        submitData,
        register,
        reset,
        getValues,
        hasErrors,
        errorsMessage,
        modalVisibility,
        handleClickToggleModalVisibility
    };
};
