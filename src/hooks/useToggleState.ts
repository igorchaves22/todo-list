import { useCallback, useState } from "react";

export const useToggleState = <T>(initialState: T, alternativeState: T, callback?: () => void) => {
    const [state, setState] = useState<T>(initialState);

    const updateState = useCallback(
        (applyState?: T) => {
            const newState = applyState ?? (state === initialState ? alternativeState : initialState);

            if (callback) {
                callback();
            }

            setState(newState);
        },
        [state, initialState, alternativeState, callback]
    );

    return { state, updateState };
};
