import svg from "~assets/svg/line.svg";
import { TodoListStateProvider } from "./TodoListStateProvider";

export const HomePage = () => {
    return (
        <section className="w-full h-auto min-h-screen flex flex-col bg-neutral-950">
            <header className="w-full h-min pt-10 px-4 pb-2 flex flex-col gap-y-2 items-center">
                <h1 className="w-full h-min text-purple-600 font-patrickHand text-6xl text-center md:text-8xl">
                    ToDo List
                </h1>
                <img
                    src={svg}
                    alt="Line"
                    loading="lazy"
                    className="w-full max-w-lg h-min object-contain lg:max-w-4xl"
                />
            </header>
            <TodoListStateProvider>
                <h1 className="w-full h-min text-neutral-50 font-patrickHand text-6xl text-center">App</h1>
            </TodoListStateProvider>
        </section>
    );
};
