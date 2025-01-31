import { ReactNode } from "react";

export const arrayLength = <T>(array: T[]) => {
    return array.length;
};

export const renderElementIfTrue = (condition: boolean, element: ReactNode) => {
    return condition ? element : null;
};

export const divideTwoNumbers = (numerator: number, denominator: number) => {
    return numerator / denominator;
};

export const generateRandomNumber = () => {
    return Math.floor(Math.random() * 1000000);
};
