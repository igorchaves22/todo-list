import { useCallback } from "react";

export const useScreen = () => {
    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return { scrollToTop };
};
