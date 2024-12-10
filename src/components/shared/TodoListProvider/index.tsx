import { Provider } from "react-redux";
import { store } from "~store";
import { IChildren } from "~types";

type AdditionalProps = IChildren;

interface ITodoListProviderProps extends AdditionalProps {}

export const TodoListProvider = ({ children }: ITodoListProviderProps) => {
    return <Provider store={store}>{children}</Provider>;
};
