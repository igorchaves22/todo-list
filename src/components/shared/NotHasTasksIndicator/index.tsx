import { svg } from "~utils";

export const NotHasTasksIndicator = () => {
    return (
        <figure className="w-full h-min flex flex-col gap-y-2 items-center">
            <img
                src={svg.loading}
                alt="No tasks indicator"
                loading="lazy"
                className="w-full max-w-32 h-min object-contain"
            />
            <figcaption className="w-full h-min text-zinc-500 font-patrickHand text-base text-center">
                No tasks found!
            </figcaption>
        </figure>
    );
};
