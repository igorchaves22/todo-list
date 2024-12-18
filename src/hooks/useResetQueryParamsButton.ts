import { useCallback } from "react";
import { resetQueryParams } from "~store";
import { useTodoListState } from "./useTodoListState";

export const useResetQueryParamsButton = () => {
    const { dispatch } = useTodoListState();

    const handleClickResetState = useCallback(() => {
        dispatch(resetQueryParams());
    }, [dispatch]);

    return { handleClickResetState };
};
