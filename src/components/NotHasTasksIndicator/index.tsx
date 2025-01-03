import svg from "~assets/svg/loading.svg";

export const NotHasTasksIndicator = () => {
    return (
        <figure className="w-max h-min flex flex-col gap-y-1 items-center">
            <img src={svg} alt="Line" loading="lazy" className="w-full max-w-32 h-min object-contain" />
            <figcaption className="w-full h-min text-neutral-400 font-patrick-hand text-base text-center">
                No tasks found!
            </figcaption>
        </figure>
    );
};
