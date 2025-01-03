import { ActionButton } from "~components";
import { usePaginationControls } from "~hooks";

export const PaginationControls = () => {
    const {
        currentPage,
        totalPages,
        isFirstPage,
        isLastPage,
        handleClickToFirstPage,
        handleClickToPrevPage,
        handleClickToNextPage,
        handleClickToLastPage
    } = usePaginationControls();

    return (
        <section className="w-full h-min grid grid-cols-[repeat(2,1.5rem),max-content,repeat(2,1.5rem)] gap-x-4 justify-center items-center">
            <ActionButton
                icon="CaretDoubleLeft"
                iconSize="text-xl"
                disabled={isFirstPage}
                onClick={handleClickToFirstPage}
                aria-label="Go to first page"
            />
            <ActionButton
                icon="CaretLeft"
                iconSize="text-xl"
                disabled={isFirstPage}
                onClick={handleClickToPrevPage}
                aria-label="Go to previous page"
            />
            <p className="w-max h-min text-neutral-50 font-patrickHand text-sm text-center">
                {currentPage} / {totalPages}
            </p>
            <ActionButton
                icon="CaretRight"
                iconSize="text-xl"
                disabled={isLastPage}
                onClick={handleClickToNextPage}
                aria-label="Go to next page"
            />
            <ActionButton
                icon="CaretDoubleRight"
                iconSize="text-xl"
                disabled={isLastPage}
                onClick={handleClickToLastPage}
                aria-label="Go to last page"
            />
        </section>
    );
};
