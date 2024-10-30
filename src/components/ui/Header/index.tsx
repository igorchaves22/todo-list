import { svg } from "~utils";

export function Header() {
    return (
        <header className="w-full h-min py-12 px-4 grid grid-cols-max-container grid-flow-row gap-y-2 justify-center justify-items-center bg-zinc-900">
            <img src={svg.quickChat} alt="Quick chat" className="w-full max-w-72 h-min object-contain" />
            <h1 className="w-full h-min text-violet-800 font-patrickHand font-bold text-5xl text-center">ToDo List</h1>
            <img src={svg.underline} alt="Underline" className="w-full max-w-[36rem] h-min object-contain" />
        </header>
    );
}
