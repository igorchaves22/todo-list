import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "~store";

type AdditionalPropsType = PropsWithChildren;

interface ITodoListStateProviderProps extends AdditionalPropsType {}

export const TodoListStateProvider = ({ children }: ITodoListStateProviderProps) => {
    return <Provider store={store}>{children}</Provider>;
};
