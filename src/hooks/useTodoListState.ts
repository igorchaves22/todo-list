import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreRootStateType, goToFirstPage, goToLastPage, goToNextPage, goToPrevPage } from "~store";

export const useTodoListState = () => {
    const dispatch = useDispatch();
    const data = useSelector(({ todoList }: StoreRootStateType) => todoList);

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

    return {
        data,
        dispatch: {
            dispatchGoToFirstPage,
            dispatchGoToPrevPage,
            dispatchGoToNextPage,
            dispatchGoToLastPage
        }
    };
};
