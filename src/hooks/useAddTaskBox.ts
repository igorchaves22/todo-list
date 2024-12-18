import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { addTask } from "~store";
import { AddTaskFormSchemaType, addTaskFormSchema, generateRandomNumber, getCurrentDateTime } from "~utils";
import { useTodoListState } from "./useTodoListState";
import { useToggleState } from "./useToggleState";

const MODAL_VISIBILITY_INITIAL_STATE = {
    initialState: false,
    alternativeState: true
};

export const useAddTaskBox = () => {
    const { state: modalVisibility, handleState: handleModalVisibility } =
        useToggleState(MODAL_VISIBILITY_INITIAL_STATE);
    const { dispatch } = useTodoListState();
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

    const handleClickToggleModalVisibility = useCallback(() => {
        handleModalVisibility();
        reset();
    }, [handleModalVisibility, reset]);
    const handleClickResetForm = useCallback(() => {
        reset();
    }, [reset]);
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

        dispatch(addTask(newTask));
        reset();
        handleModalVisibility();
    });

    return {
        modalVisibility,
        handleClickToggleModalVisibility,
        handleClickResetForm,
        submitData,
        register,
        errors,
        getValues
    };
};
