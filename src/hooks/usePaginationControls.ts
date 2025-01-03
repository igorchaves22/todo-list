import { useCallback } from "react";
import { TODO_LIST_INITIAL_PAGE } from "~utils";
import { useScreen } from "./useScreen";
import { useTodoListState } from "./useTodoListState";

export const usePaginationControls = () => {
    const {
        data: {
            queryParams: {
                pagination: { currentPage, totalPages }
            }
        },
        dispatch: { dispatchGoToFirstPage, dispatchGoToPrevPage, dispatchGoToNextPage, dispatchGoToLastPage }
    } = useTodoListState();
    const { scrollToTop } = useScreen();

    const isFirstPage = currentPage === TODO_LIST_INITIAL_PAGE;
    const isLastPage = currentPage === totalPages;
    const handleClickToFirstPage = useCallback(() => {
        dispatchGoToFirstPage();
        scrollToTop();
    }, [dispatchGoToFirstPage, scrollToTop]);
    const handleClickToPrevPage = useCallback(() => {
        dispatchGoToPrevPage();
        scrollToTop();
    }, [dispatchGoToPrevPage, scrollToTop]);
    const handleClickToNextPage = useCallback(() => {
        dispatchGoToNextPage();
        scrollToTop();
    }, [dispatchGoToNextPage, scrollToTop]);
    const handleClickToLastPage = useCallback(() => {
        dispatchGoToLastPage();
        scrollToTop();
    }, [dispatchGoToLastPage, scrollToTop]);

    return {
        currentPage,
        totalPages,
        isFirstPage,
        isLastPage,
        handleClickToFirstPage,
        handleClickToPrevPage,
        handleClickToNextPage,
        handleClickToLastPage
    };
};
