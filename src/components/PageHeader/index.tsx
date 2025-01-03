import svg from "~assets/svg/line.svg";

export const PageHeader = () => {
    return (
        <header className="w-full h-min pt-10 px-4 pb-2 flex flex-col gap-y-2 items-center">
            <h1 className="text-purple-600 font-patrick-hand text-7xl text-center">ToDo List</h1>
            <img src={svg} alt="Line" loading="lazy" className="w-full max-w-xl h-min object-contain" />
        </header>
    );
};
