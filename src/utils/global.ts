export const arrayLength = <T>(array: T[]) => {
    return array.length;
};

export const ceilDivision = (numerator: number, denominator: number) => {
    return Math.ceil(numerator / denominator);
};

export const getItemsInRange = <T>(items: T[], rangeStart: number, maxRange: number) => {
    const start = (rangeStart - 1) * maxRange;
    const end = start + maxRange;

    return items.slice(start, end);
};

export const transformToLowerCase = (text: string) => {
    return text.toLowerCase();
};
