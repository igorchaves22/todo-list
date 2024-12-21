import { Provider } from "react-redux";
import { store } from "~store";
import { IChildren } from "~types";

type AdditionalPropsType = IChildren;

interface ITodoListProvider extends AdditionalPropsType {}

export const TodoListProvider = ({ children }: ITodoListProvider) => {
    return <Provider store={store}>{children}</Provider>;
};
