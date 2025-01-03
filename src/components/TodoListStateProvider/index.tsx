import { Provider } from "react-redux";
import { store } from "~store";
import { IChildren } from "~types";

type AdditionalPropsType = IChildren;

interface ITodoListStateProvider extends AdditionalPropsType {}

export const TodoListStateProvider = ({ children }: ITodoListStateProvider) => {
    return <Provider store={store}>{children}</Provider>;
};
