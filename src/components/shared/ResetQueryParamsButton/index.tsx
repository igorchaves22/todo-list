import { useResetQueryParamsButton } from "~hooks";
import { ActionButton } from "../ActionButton";

export const ResetQueryParamsButton = () => {
    const { handleClickResetState } = useResetQueryParamsButton();

    return (
        <ActionButton
            text="clear parameters"
            color="text-neutral-400"
            icon="ArrowClockwise"
            iconSize="lg"
            iconAnimation="rotate"
            onClick={handleClickResetState}
            aria-label="Clear parameters"
        />
    );
};
