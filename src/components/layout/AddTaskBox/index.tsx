import { ActionButton, ModalScreen, PriorityInput, TextInput, TextareaInput } from "~components/shared";
import { useAddTaskBox } from "~hooks";
import { renderElementIfTrue } from "~utils";

export const AddTaskBox = () => {
    const {
        modalVisibility,
        handleClickToggleModalVisibility,
        handleClickResetForm,
        submitData,
        register,
        errors,
        getValues
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
            {renderElementIfTrue(
                modalVisibility,
                <ModalScreen animation="animate-backInDown" closeModalFn={handleClickToggleModalVisibility}>
                    <form
                        onSubmit={submitData}
                        className="w-full h-min flex flex-col flex-grow gap-y-12 justify-between"
                    >
                        <section className="w-full h-min flex flex-wrap gap-y-2 gap-x-8 justify-center">
                            <p className="w-full h-min text-neutral-50 font-patrick-hand text-xl text-center">
                                Priority
                            </p>
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
                        <TextInput title="Title" errorMessage={errors.title?.message} {...register("title")} />
                        <TextareaInput
                            title="Description"
                            errorMessage={errors.description?.message}
                            {...register("description")}
                        />
                        <div className="w-full h-min flex flex-wrap gap-x-12 justify-center md:justify-end">
                            <ActionButton text="clear" type="reset" onClick={() => handleClickResetForm()} />
                            <ActionButton text="add" type="submit" />
                        </div>
                    </form>
                </ModalScreen>
            )}
        </>
    );
};
