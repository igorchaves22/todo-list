import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { AddTaskFormSchemaType, addTaskFormSchema, createTask } from "~utils";
import { useTodoListState } from "./useTodoListState";
import { useToggleState } from "./useToggleState";

export const useAddTaskForm = () => {
    const { state: formVisibility, updateState: updateFormVisibility } = useToggleState(false, true);
    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
        reset
    } = useForm<AddTaskFormSchemaType>({
        resolver: yupResolver(addTaskFormSchema),
        defaultValues: {
            priority: "low"
        }
    });
    const {
        dispatch: { dispatchAddTask }
    } = useTodoListState();

    const toggleFormVisibility = useCallback(() => {
        updateFormVisibility();
        reset();
    }, [updateFormVisibility, reset]);
    const submitData = handleSubmit(({ priority, title }) => {
        const data = createTask(priority, title);

        dispatchAddTask(data);
        reset();
        updateFormVisibility(false);
    });

    return { formVisibility, toggleFormVisibility, submitData, register, errors, getValues, reset };
};
