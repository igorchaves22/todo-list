import { ActionButton, ErrorMessage } from "~components";
import { useTaskSearchBar } from "~hooks";

export const TaskSearchBar = () => {
    const { submitData, register, hasError, errorMessage } = useTaskSearchBar();

    return (
        <form
            onSubmit={submitData}
            className="w-full h-min py-2 px-6 rounded-[10rem] relative grid auto-rows-min grid-cols-[max-content,1fr] items-center gap-x-4 bg-neutral-800 md:w-[75%]"
        >
            <ActionButton
                icon="MagnifyingGlass"
                type="submit"
                color="text-neutral-50"
                iconSize="text-2xl"
                aria-label="Submit search data"
            />
            <input
                type="search"
                className="w-full h-min outline-none bg-transparent text-neutral-50 font-patrick-hand text-sm"
                autoComplete="off"
                aria-label="Search tasks"
                {...register("searchTerm")}
            />
            <ErrorMessage isVisible={hasError} message={errorMessage} textAlign="text-center" />
        </form>
    );
};
