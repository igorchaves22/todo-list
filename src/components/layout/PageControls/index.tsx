import { ActionButton } from "~components/shared";
import { usePageControls } from "~hooks";

export const PageControls = () => {
    const {
        currentPage,
        totalPages,
        handleClickToFirstPage,
        handleClickToPrevPage,
        handleClickToNextPage,
        handleClickToLastPage,
        isFirstPage,
        isLastPage
    } = usePageControls();

    return (
        <section className="w-full h-min flex gap-x-4 justify-center items-center">
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
            <p className="w-full max-w-10 h-min text-zinc-50 font-patrickHand text-sm text-center">
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
