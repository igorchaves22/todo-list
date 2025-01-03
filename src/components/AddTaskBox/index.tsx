import { ActionButton, ModalScreen, PriorityInput, TextInput, TextareaInput } from "~components";
import { useAddTaskBox } from "~hooks";

export const AddTaskBox = () => {
    const {
        submitData,
        register,
        reset,
        getValues,
        hasErrors,
        errorsMessage,
        modalVisibility,
        handleClickToggleModalVisibility
    } = useAddTaskBox();

    return (
        <>
            <ActionButton
                text="add task"
                icon="Plus"
                iconSize="lg"
                iconAnimation="rotate"
                onClick={handleClickToggleModalVisibility}
            />
            <ModalScreen
                visibility={modalVisibility}
                closeModalFn={handleClickToggleModalVisibility}
                animation="animate-back-in-down"
            >
                <form onSubmit={submitData} className="w-full h-min flex flex-col flex-grow gap-y-12 justify-between">
                    <section className="w-full h-min flex flex-wrap gap-y-2 gap-x-8 justify-center">
                        <p className="w-full h-min text-neutral-50 font-patrick-hand text-xl text-center">Priority</p>
                        <PriorityInput
                            priority="low"
                            defaultChecked={getValues("priority") === "low"}
                            {...register("priority")}
                        />
                        <PriorityInput
                            priority="medium"
                            defaultChecked={getValues("priority") === "medium"}
                            {...register("priority")}
                        />
                        <PriorityInput
                            priority="high"
                            defaultChecked={getValues("priority") === "high"}
                            {...register("priority")}
                        />
                    </section>
                    <TextInput
                        label="Title"
                        hasError={hasErrors.title}
                        errorMessage={errorsMessage.title}
                        {...register("title")}
                    />
                    <TextareaInput
                        label="Description"
                        hasError={hasErrors.description}
                        errorMessage={errorsMessage.description}
                        {...register("description")}
                    />
                    <section className="w-full h-min flex flex-wrap gap-x-12 justify-center md:justify-end">
                        <ActionButton text="clear" type="reset" onClick={() => reset()} />
                        <ActionButton text="add" type="submit" />
                    </section>
                </form>
            </ModalScreen>
        </>
    );
};
