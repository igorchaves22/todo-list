import { ActionButton, ErrorMessage } from "~components/shared";
import { useSearchTaskForm } from "~hooks";

export const SearchTaskForm = () => {
    const { submitData, register, errors } = useSearchTaskForm();

    return (
        <form
            onSubmit={submitData}
            className="w-full h-min py-2 px-6 rounded-[10rem] relative grid auto-rows-min grid-cols-[max-content,1fr] items-center gap-x-4 bg-purple-600/5 md:w-[75%]"
        >
            <ActionButton
                icon="MagnifyingGlass"
                type="submit"
                color="text-neutral-50"
                iconSize="text-2xl"
                aria-label="Submit survey data"
            />
            <input
                type="search"
                className="w-full h-min outline-none bg-transparent text-neutral-400 font-patrick-hand text-sm"
                autoComplete="off"
                {...register("searchTerm")}
            />
            <ErrorMessage
                isVisible={!!errors.searchTerm?.message}
                message={errors.searchTerm?.message}
                textAlign="text-center"
            />
        </form>
    );
};
