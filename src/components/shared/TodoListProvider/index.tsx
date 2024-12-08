import { Provider } from "react-redux";
import { IChildren } from "types/global";
import { store } from "~store";

type ExtendsType = IChildren;

interface ITodoListProviderProps extends ExtendsType {}

export const TodoListProvider = ({ children }: ITodoListProviderProps) => {
    return <Provider store={store}>{children}</Provider>;
};
