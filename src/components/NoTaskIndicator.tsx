import svg from "~assets/svg/loading.svg";

export const NoTaskIndicator = () => {
    return (
        <figure className="w-max h-min flex flex-col items-center">
            <img
                src={svg}
                alt="Not tasks found"
                loading="lazy"
                className="w-full max-w-32 h-min object-contain drop-shadow-[0_1rem_1rem_rgba(147,51,234,0.5)]"
            />
            <figcaption className="w-full h-min text-neutral-400 font-patrickHand text-base text-center">
                No tasks found!
            </figcaption>
        </figure>
    );
};
