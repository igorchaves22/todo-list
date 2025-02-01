import { useAddTaskForm } from "~hooks";
import { ActionButton } from "./ActionButton";
import { OverlayModal } from "./OverlayModal";
import { PriorityInput } from "./PriorityInput";
import { TextInput } from "./TextInput";

export const AddTaskForm = () => {
    const { formVisibility, toggleFormVisibility, submitData, register, errors, getValues, reset } = useAddTaskForm();

    return (
        <OverlayModal
            button={{
                text: "add task",
                icon: "Plus",
                iconSize: "text-xl",
                iconAnimation: "rotate"
            }}
            modal={{
                isVisible: formVisibility,
                toggleIsVisible: toggleFormVisibility,
                animation: "animate-backInDown"
            }}
        >
            <form onSubmit={submitData} className="w-full h-min flex flex-col grow justify-between">
                <section className="w-full h-min flex flex-col gap-y-8 md:px-20">
                    <section className="w-full h-min flex flex-wrap gap-y-2 gap-x-8 justify-center">
                        <p className="w-full h-min text-neutral-50 font-patrickHand text-xl text-center">Priority</p>
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
                        aria-label="Title input"
                        placeholder="Clean the house..."
                        errorMessage={errors.title?.message}
                        {...register("title")}
                    />
                </section>
                <section className="w-full h-min flex flex-wap justify-center gap-x-6 md:justify-end">
                    <ActionButton type="reset" text="clear" aria-label="Reset form" onClick={() => reset()} />
                    <ActionButton type="submit" text="add" aria-label="Submit form" />
                </section>
            </form>
        </OverlayModal>
    );
};
