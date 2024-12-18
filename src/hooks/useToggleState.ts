import { useCallback, useState } from "react";

interface IUseToggleState<T> {
    initialState: T;
    alternativeState: T;
    callback?: () => void;
}

export const useToggleState = <T>({ initialState, alternativeState, callback }: IUseToggleState<T>) => {
    const [state, setState] = useState<T>(initialState);

    const handleState = useCallback(
        (applyState?: T) => {
            const newState = applyState ?? (state === initialState ? alternativeState : initialState);

            if (callback) {
                callback();
            }

            setState(newState);
        },
        [state, initialState, alternativeState, callback]
    );

    return { state, handleState };
};
