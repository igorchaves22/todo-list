import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    StoreRootStateType,
    applySearch,
    goToFirstPage,
    goToLastPage,
    goToNextPage,
    goToPrevPage,
    resetQueryParams
} from "~store";

export const useTodoListState = () => {
    const dispatch = useDispatch();
    const data = useSelector(({ todoList }: StoreRootStateType) => todoList);

    const dispatchApplySearch = useCallback(
        (text: string) => {
            dispatch(applySearch(text));
        },
        [dispatch]
    );
    const dispatchGoToFirstPage = useCallback(() => {
        dispatch(goToFirstPage());
    }, [dispatch]);
    const dispatchGoToPrevPage = useCallback(() => {
        dispatch(goToPrevPage());
    }, [dispatch]);
    const dispatchGoToNextPage = useCallback(() => {
        dispatch(goToNextPage());
    }, [dispatch]);
    const dispatchGoToLastPage = useCallback(() => {
        dispatch(goToLastPage());
    }, [dispatch]);
    const dispatchResetQueryParams = useCallback(() => {
        dispatch(resetQueryParams());
    }, [dispatch]);

    return {
        data,
        dispatch: {
            dispatchApplySearch,
            dispatchGoToFirstPage,
            dispatchGoToPrevPage,
            dispatchGoToNextPage,
            dispatchGoToLastPage,
            dispatchResetQueryParams
        }
    };
};
