import { useCallback } from "react";
import { setPage } from "~store";
import { TODO_LIST_INITIAL_PAGE } from "~utils";
import { useTodoListState } from "./useTodoListState";

export const usePageControls = () => {
    const {
        dispatch,
        todoList: {
            queryParams: {
                pagination: { currentPage, totalPages }
            }
        }
    } = useTodoListState();

    const handleSetPage = useCallback(
        (page: number) => {
            dispatch(setPage(page));
        },
        [dispatch]
    );
    const handleClickToFirstPage = useCallback(() => {
        handleSetPage(TODO_LIST_INITIAL_PAGE);
    }, [handleSetPage]);
    const handleClickToPrevPage = useCallback(() => {
        if (currentPage > TODO_LIST_INITIAL_PAGE) {
            handleSetPage(currentPage - TODO_LIST_INITIAL_PAGE);
        }
    }, [handleSetPage, currentPage]);
    const handleClickToNextPage = useCallback(() => {
        if (currentPage < totalPages) {
            handleSetPage(currentPage + TODO_LIST_INITIAL_PAGE);
        }
    }, [handleSetPage, currentPage, totalPages]);
    const handleClickToLastPage = useCallback(() => {
        handleSetPage(totalPages);
    }, [handleSetPage, totalPages]);
    const isFirstPage = currentPage === TODO_LIST_INITIAL_PAGE;
    const isLastPage = currentPage === totalPages;

    return {
        currentPage,
        totalPages,
        handleClickToFirstPage,
        handleClickToPrevPage,
        handleClickToNextPage,
        handleClickToLastPage,
        isFirstPage,
        isLastPage
    };
};
