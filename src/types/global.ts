import { ButtonHTMLAttributes, ComponentType, InputHTMLAttributes, ReactNode, SVGProps } from "react";

export type ChildrenType = ReactNode;
export type SvgElementType = ComponentType<SVGProps<SVGSVGElement>>;
export type SvgPropsType = SVGProps<SVGSVGElement>;
export type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement>;
export type InputPropsType = InputHTMLAttributes<HTMLInputElement>;
export type DeepPartial<T> = T extends object
    ? T extends Array<infer U>
        ? Array<DeepPartial<U>>
        : { [P in keyof T]?: DeepPartial<T[P]> }
    : T;

export interface IChildren {
    children: ChildrenType;
}
