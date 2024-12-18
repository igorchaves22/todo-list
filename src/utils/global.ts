import { ChildrenType } from "~types";

export const renderElementIfTrue = (condition: boolean, element: ChildrenType) => {
    return condition ? element : null;
};

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

export const generateRandomNumber = () => {
    return Math.floor(Math.random() * 1000000);
};

export const transformToLowerCase = (text: string) => {
    return text.toLowerCase();
};

export const removeArrayDuplicates = <T>(array: T[]): T[] => {
    return [...new Set(array)];
};

export const getCurrentDateTime = () => {
    const now = new Date();

    const month = now.getMonth() + 1;
    const day = now.getDate();
    const year = now.getFullYear();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    return `${month}/${day}/${year} - ${hour}:${minute}:${second}`;
};
