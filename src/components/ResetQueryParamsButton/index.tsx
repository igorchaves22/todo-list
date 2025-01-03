import { useTodoListState } from "~hooks";
import { ActionButton } from "../ActionButton";

export const ResetQueryParamsButton = () => {
    const {
        dispatch: { dispatchResetQueryParams }
    } = useTodoListState();

    return (
        <ActionButton
            text="clear"
            color="text-neutral-400"
            icon="ArrowClockwise"
            iconSize="lg"
            iconAnimation="rotate"
            onClick={dispatchResetQueryParams}
            aria-label="Clear parameters"
        />
    );
};
