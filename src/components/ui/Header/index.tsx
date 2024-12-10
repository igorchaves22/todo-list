import { svg } from "~utils";

export const Header = () => {
    return (
        <header className="w-full h-min pt-16 px-4 pb-2 flex flex-col gap-y-2 items-center bg-zinc-950">
            <h1 className="w-full h-min text-purple-600 font-patrickHand text-6xl text-center">ToDo List</h1>
            <img src={svg.line} alt="Line" loading="lazy" className="w-full max-w-[36rem] h-min object-contain" />
        </header>
    );
};
