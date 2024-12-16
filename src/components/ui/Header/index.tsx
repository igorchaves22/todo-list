import lineSvg from "~assets/svg/line.svg";

export const Header = () => {
    return (
        <header className="w-full h-min pt-14 px-4 pb-2 grid auto-rows-min grid-cols-max-layout gap-y-1 justify-center justify-items-center">
            <h1 className="w-full h-min text-purple-600 font-patrick-hand text-6xl text-center">ToDo List</h1>
            <img src={lineSvg} alt="Line" loading="lazy" className="w-full max-w-[38rem] h-min object-contain" />
        </header>
    );
};
